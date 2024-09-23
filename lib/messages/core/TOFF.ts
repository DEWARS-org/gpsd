export interface TOFF {
  /**
   * Fixed: "TOFF"
   */
  class: "TOFF";

  /**
   * Name of the originating device
   */
  device: string;

  /**
   * seconds from the GPS clock
   */
  real_sec: number;

  /**
   * nanoseconds from the GPS clock
   */
  real_nsec: number;

  /**
   * seconds from the system clock
   */
  clock_sec: number;

  /**
   * nanoseconds from the system clock
   */
  clock_nsec: number;
}
