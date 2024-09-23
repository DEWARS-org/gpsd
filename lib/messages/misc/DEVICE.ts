export interface DEVICE {
  /**
   * Fixed: "DEVICE"
   */
  class: "DEVICE";

  /**
   * Time the device was activated as an ISO8601 time stamp.
   * If the device is inactive this attribute is absent.
   */
  activated?: string;

  /**
   * Device speed in bits per second.
   */
  bps?: number;

  /**
   * Device cycle time in seconds.
   */
  cycle?: number;

  /**
   * GPSD’s name for the device driver type.
   * Won’t be reported before gpsd has seen identifiable packets from the device.
   */
  driver?: string;

  /**
   * Bit vector of property flags.
   * Currently defined flags are: describe packet types seen so far (GPS, RTCM2, RTCM3, AIS).
   * Won’t be reported if empty, e.g. before gpsd has seen identifiable packets from the device.
   */
  flags?: number;

  /**
   * Data, in bare hexadecimal, to send to the GNSS receiver.
   */
  hexdata?: string;

  /**
   * Device minimum cycle time in seconds.
   * Reported from ?DEVICE when (and only when) the rate is switchable.
   * It is read-only and not settable.
   */
  mincycle?: number;

  /**
   * 0 means NMEA mode and 1 means alternate mode (binary if it has one, for SiRF and Evermore chipsets in particular).
   * Attempting to set this mode on a non-GPS device will yield an error.
   */
  native?: number;

  /**
   * N, O or E for no parity, odd, or even.
   */
  parity?: "N" | "O" | "E";

  /**
   * Name the device for which the control bits are being reported, or for which they are to be applied.
   * This attribute may be omitted only when there is exactly one subscribed channel.
   */
  path?: string;

  /**
   * True if device is read-only.
   */
  readonly?: boolean;

  /**
   * Hardware serial number (if the device driver returns that value).
   */
  sernum?: string;

  /**
   * Stop bits (1 or 2).
   */
  stopbits: 1 | 2;

  /**
   * Whatever version information the device driver returned.
   */
  subtype?: string;

  /**
   * More version information the device driver returned.
   */
  subtype1?: string;
}
