export interface GST {
  /**
   * Fixed: "GST"
   */
  class: "GST";

  /**
   * Name of originating device
   */
  device?: string;

  /**
   * Time/date stamp in ISO8601 format, UTC.
   * May have a fractional part of up to .001sec precision.
   */
  time?: string;

  /**
   * Value of the standard deviation of the range inputs to the navigation process (range inputs include pseudoranges and DGPS corrections).
   */
  rms?: number;

  /**
   * Standard deviation of semi-major axis of error ellipse, in meters.
   */
  major?: number;

  /**
   * Standard deviation of semi-minor axis of error ellipse, in meters.
   */
  minor?: number;

  /**
   * Orientation of semi-major axis of error ellipse, in degrees from true north.
   */
  orient?: number;

  /**
   * Standard deviation of altitude error, in meters.
   */
  alt?: number;

  /**
   * Standard deviation of latitude error, in meters.
   */
  lat?: number;

  /**
   * Standard deviation of longitude error, in meters.
   */
  lon?: number;

  /**
   * Standard deviation of East velocity error, in meters / second.
   */
  ve?: number;

  /**
   * Standard deviation of North velocity error, in meters / second.
   */
  vn?: number;

  /**
   * Standard deviation of Up velocity error, in meters / second.
   */
  vu?: number;
}
