import type { GpsdClass } from "./types.ts";

export const ClassFilterStream = (dataClass: GpsdClass) =>
  new TransformStream({
    transform(message, controller) {
      if (message.MNEMONIC === dataClass) {
        controller.enqueue(message);
      }
    },
  });
