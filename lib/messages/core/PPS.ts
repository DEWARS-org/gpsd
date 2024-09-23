export interface PPS {
  /**
   * Fixed: "PPS"
   */
  class: "PPS";

  /**
   * Name of the originating device
   */
  device: string;

  /**
   * seconds from the PPS source
   */
  real_sec: number;

  /**
   * nanoseconds from the PPS source
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

  /**
   * NTP style estimate of PPS precision
   */
  precision: number;

  /**
   * shm key of this PPS
   */
  shm: string;

  /**
   * Quantization error of the PPS, in picoseconds.
   * Sometimes called the "sawtooth" error.
   */
  qErr?: number;
}
