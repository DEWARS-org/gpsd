import type { GpsdClass, GpsdMessage } from "../mod.ts";

export const ClassFilterStream = (dataClass: GpsdClass) =>
  new TransformStream<GpsdMessage, GpsdMessage>({
    transform(message, controller) {
      if (message.class === dataClass) {
        controller.enqueue(message);
      }
    },
  });
