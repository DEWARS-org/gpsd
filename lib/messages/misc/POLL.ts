import type { SKY } from "../core/SKY.ts";
import type { TPV } from "../core/TPV.ts";

export interface POLL {
  /**
   * Fixed: "POLL"
   */
  class: "POLL";

  /**
   * Timestamp in ISO 8601 format. May have a fractional part of up to .001sec precision.
   */
  time: number;

  /**
   * Count of active devices.
   */
  active: number;

  /**
   * Comma-separated list of TPV objects.
   */
  tpv: TPV;

  /**
   * Comma-separated list of SKY objects.
   */
  sky: SKY;
}
