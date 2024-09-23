export interface WATCH {
  /**
   * Fixed: "WATCH"
   */
  class: "WATCH";

  /**
   * Enable (true) or disable (false) watcher mode.
   * Default is true.
   */
  enable?: boolean;

  /**
   * Enable (true) or disable (false) dumping of JSON reports.
   * Default is false.
   */
  json?: boolean;

  /**
   * Enable (true) or disable (false) dumping of binary packets as pseudo-NMEA.
   * Default is false.
   */
  nmea?: boolean;

  /**
   * Controls 'raw' mode.
   * When this attribute is set to 1 for a channel, gpsd reports the unprocessed NMEA or AIVDM data stream from whatever device is attached.
   * Binary GPS packets are hex-dumped.
   * RTCM2 and RTCM3 packets are not dumped in raw mode.
   * When this attribute is set to 2 for a channel that processes binary data, gpsd reports the received data verbatim without hex-dumping.
   */
  raw?: number;

  /**
   * If true, apply scaling divisors to output before dumping; default is false.
   */
  scaled?: boolean;

  /**
   * If true, aggregate AIS type24 sentence parts.
   * If false, report each part as a separate JSON object, leaving the client to match MMSIs and aggregate.
   * Default is false.
   * Applies only to AIS reports.
   */
  split24?: boolean;

  /**
   * If true, emit the TOFF JSON message on each cycle and a PPS JSON message when the device issues 1PPS.
   * Default is false.
   */
  pps?: boolean;

  /**
   * If present, enable watching only of the specified device rather than all devices.
   * Useful with raw and NMEA modes in which device responses aren’t tagged.
   * Has no effect when used with enable:false.
   */
  device?: string;

  /**
   * URL of the remote daemon reporting the watch set.
   * If empty, this is a WATCH response from the local daemon.
   */
  remote?: string;
}
