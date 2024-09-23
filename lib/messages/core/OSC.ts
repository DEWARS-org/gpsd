export interface OSC {
  /**
   * Fixed: "OSC"
   */
  class: "OSC";

  /**
   * Name of the originating device.
   */
  device: string;

  /**
   * If true, the oscillator is currently running.
   * Oscillators may require warm-up time at the start of the day.
   */
  running: boolean;

  /**
   * If true, the oscillator is receiving a GPS PPS signal.
   */
  reference: boolean;

  /**
   * If true, the GPS PPS signal is sufficiently stable and is being used to discipline the local oscillator.
   */
  disciplined: boolean;

  /**
   * The time difference (in nanoseconds) between the GPS-disciplined oscillator PPS output pulse and the most recent GPS PPS input pulse.
   */
  delta: number;
}
