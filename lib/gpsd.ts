import { JsonParseStream } from "@std/json";
import { TextLineStream } from "@std/streams";
import type { GpsdClass, MessageByClass } from "../mod.ts";
import { ClassFilterStream } from "./classFilterStream.ts";

export class Gpsd {
  private hostname: string;
  private port: number;
  private conn?: Deno.Conn;
  private outgoingStream?: ReadableStreamDefaultController<unknown>;
  private incomingStream?: ReadableStream;

  constructor(hostname = "127.0.0.1", port = 2947) {
    this.hostname = hostname;
    this.port = port;
  }

  async connect(): Promise<void> {
    console.log(`Connecting to GPSD at ${this.hostname}:${this.port}`);
    this.conn = await Deno.connect({
      hostname: this.hostname,
      port: this.port,
    });

    this.incomingStream = this.conn.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream())
      .pipeThrough(new JsonParseStream());

    const outgoingStream = new ReadableStream({
      start: (controller) => {
        this.outgoingStream = controller;
      },
    });

    outgoingStream
      .pipeThrough(new TextEncoderStream())
      .pipeTo(this.conn.writable)
      .catch((error) => {
        console.error("Stream piping failed:", error);
      });

    this.sendCommand('?WATCH={"enable":true,"json":true}');
  }

  close(): void {
    if (!this.conn) {
      throw new Error("Not connected");
    }
    this.conn.close();
  }

  public stream<T extends GpsdClass>(
    dataClass?: T,
  ): ReadableStream<MessageByClass<T>> {
    if (!this.incomingStream) {
      throw new Error("Not connected");
    }

    let stream = this.incomingStream;

    if (dataClass) {
      stream = stream.pipeThrough(ClassFilterStream(dataClass));
    }

    return stream;
  }

  public sendCommand(data: string): void {
    if (!this.outgoingStream) {
      throw new Error("Not connected");
    }
    console.log("Sending command:", data);
    this.outgoingStream.enqueue(data);
  }
}
