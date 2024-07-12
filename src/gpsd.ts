import { JsonParseStream } from "@std/json";
import { DelimiterStream } from "@std/streams";
import type {
  GpsdClassTypes,
  GpsdResponse,
  GpsdResponseByClass,
} from "./types.ts";

export class Gpsd {
  private hostname: string;
  private port: number;
  private conn?: Deno.Conn;
  private encoder = new TextEncoder();

  constructor(hostname: string, port: number) {
    this.hostname = hostname;
    this.port = port;
  }

  async connect() {
    this.conn = await Deno.connect({
      hostname: this.hostname,
      port: this.port,
    });
    await this.sendCommand('?WATCH={"enable":true,"json":true}');
  }

  async sendCommand(command: string) {
    if (!this.conn) {
      throw new Error("Not connected");
    }
    await this.conn.write(this.encoder.encode(`${command}\n`));
  }

  getResponseStream() {
    if (!this.conn) {
      throw new Error("Not connected");
    }
    const reader = this.conn.readable;
    return reader
      .pipeThrough(
        new DelimiterStream(new TextEncoder().encode("\n")),
      )
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new JsonParseStream());
  }

  close() {
    if (!this.conn) {
      throw new Error("Not connected");
    }
    this.conn.close();
  }

  async watch<T extends GpsdClassTypes>(
    dataClass: T,
    callback: (data: GpsdResponseByClass<T>) => void,
  ) {
    if (!this.conn) {
      throw new Error("Not connected");
    }

    const responseStream = this.getResponseStream();
    for await (const datapoint of responseStream) {
      const response = datapoint as unknown as GpsdResponse;
      if (response.class === dataClass) {
        callback(response as GpsdResponseByClass<T>);
      }
    }
  }
}
