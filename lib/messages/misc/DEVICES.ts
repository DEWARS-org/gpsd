import type { DEVICE } from "./DEVICE.ts";

export interface DEVICES {
  /**
   * Fixed: "DEVICES"
   */
  class: "DEVICES";

  /**
   * List of device descriptions
   */
  devices: DEVICE[];

  /**
   * URL of the remote daemon reporting the device set.
   * If empty, this is a DEVICES response from the local daemon.
   */
  remote?: string;
}
