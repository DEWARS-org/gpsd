import type { GpsdClass, GpsdMessage } from "./types.ts";

export const ClassFilterStream = (dataClass: GpsdClass) =>
  new TransformStream<GpsdMessage, GpsdMessage>({
    transform(message, controller) {
      if (message.class === dataClass) {
        controller.enqueue(message);
      }
    },
  });
