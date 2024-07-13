import { JsonParseStream, JsonStringifyStream } from "@std/json";
import { TextLineStream } from "@std/streams";
import type { GpsdClass, MessageByClass } from "./types.ts";
import { ClassFilterStream } from "./classFilterStream.ts";

export class Gpsd {
  private hostname: string;
  private port: number;
  private conn?: Deno.Conn;
  private outgoingStream?: ReadableStreamDefaultController<unknown>;
  private incommingStream?: ReadableStream;

  constructor(hostname = "127.0.0.1", port = 2947) {
    this.hostname = hostname;
    this.port = port;
  }

  async connect() {
    this.conn = await Deno.connect({
      hostname: this.hostname,
      port: this.port,
    });

    this.incommingStream = this.conn.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream())
      .pipeThrough(new JsonParseStream());

    const outgoingStream = new ReadableStream({
      start: (controller) => {
        this.outgoingStream = controller;
      },
    });

    outgoingStream
      .pipeThrough(new JsonStringifyStream())
      .pipeThrough(new TextEncoderStream())
      .pipeTo(this.conn.writable)
      .catch((error) => {
        console.error("Stream piping failed:", error);
      });

    this.sendCommand('?WATCH={"enable":true,"json":true}');
  }

  close() {
    if (!this.conn) {
      throw new Error("Not connected");
    }
    this.conn.close();
  }

  public async *subscribe<T extends GpsdClass>(
    dataClass?: T,
  ): AsyncGenerator<MessageByClass<T>> {
    if (!this.incommingStream) {
      throw new Error("Not connected");
    }

    const stream = this.incommingStream;

    if (dataClass) {
      stream.pipeThrough(ClassFilterStream(dataClass));
    }

    for await (const response of stream) {
      yield response;
    }
  }

  public stream<T extends GpsdClass>(
    dataClass?: T,
  ): ReadableStream<MessageByClass<T>> {
    if (!this.incommingStream) {
      throw new Error("Not connected");
    }

    const stream = this.incommingStream;

    if (dataClass) {
      stream.pipeThrough(ClassFilterStream(dataClass));
    }

    return stream;
  }

  public sendCommand(data: string) {
    if (!this.outgoingStream) {
      throw new Error("Not connected");
    }
    this.outgoingStream.enqueue(data);
  }
}
