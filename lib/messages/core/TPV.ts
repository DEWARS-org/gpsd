export enum NmeaMode {
  /**
   * unknown
   */
  Unknown = 0,

  /**
   * no fix
   */
  NoFix = 1,

  /**
   * 2D
   */
  TwoD = 2,

  /**
   * 3D
   */
  ThreeD = 3,
}

export enum AntennaStatus {
  /**
   * Short
   */
  Short = 2,

  /**
   * Open
   */
  Open = 3,
}

export enum GpsFixStatus {
  /**
   * Unknown
   */
  Unknown = 0,

  /**
   * Normal
   */
  Normal = 1,

  /**
   * DGPS
   */
  DGPS = 2,

  /**
   * RTK Fixed
   */
  RTKFixed = 3,

  /**
   * RTK Floating
   */
  RTKFloating = 4,

  /**
   * DR
   */
  DR = 5,

  /**
   * GNSSDR
   */
  GNSSDR = 6,

  /**
   * Time (surveyed)
   */
  Time = 7,

  /**
   * Simulated
   */
  Simulated = 8,

  /**
   * P(Y)
   */
  PY = 9,
}

export interface TPV {
  /**
   * Fixed: "TPV"
   */
  class: "TPV";

  /**
   * Name of the originating device.
   */
  device?: string;

  /**
   * NMEA mode.
   */
  mode: NmeaMode;

  /**
   * @deprecated Use altHAE or altMSL.
   */
  alt?: number;

  /**
   * Altitude, height above ellipsoid, in meters.
   * Probably WGS84.
   */
  altHAE?: number;

  /**
   * MSL Altitude in meters.
   * The geoid used is rarely specified and is often inaccurate.
   * See the comments below on geoidSep.
   * altMSL is altHAE minus geoidSep.
   */
  altMSL?: number;

  /**
   * Antenna Status.
   */
  ant?: AntennaStatus;

  /**
   * Climb (positive) or sink (negative) rate, meters per second.
   */
  climb?: number;

  /**
   * Offset of local GNSS clock relative to UTC, in ns.
   * AKA Clock Offset.
   * Sometimes given as Part Per Billion (ppb) which is the same as ns.
   */
  clockbias?: number;

  /**
   * The rate at which the local clock is drifting.
   * In ns/s.
   */
  clockdrift?: number;

  /**
   * Current datum.
   * Hopefully WGS84.
   */
  datum?: number;

  /**
   * Depth in meters.
   * Probably depth below the keel…​
   */
  depth?: number;

  /**
   * Age of DGPS data.
   * In seconds
   */
  dgpsAge?: number;

  /**
   * Station of DGPS data.
   */
  dgpsSta?: number;

  /**
   * ECEF X position in meters.
   */
  ecefx?: number;

  /**
   * ECEF Y position in meters.
   */
  ecefy?: number;

  /**
   * ECEF Z position in meters.
   */
  ecefz?: number;

  /**
   * ECEF position error in meters.
   * Certainty unknown.
   */
  ecefpAcc?: number;

  /**
   * ECEF X velocity in meters per second.
   */
  ecefvx?: number;

  /**
   * ECEF Y velocity in meters per second.
   */
  ecefvy?: number;

  /**
   * ECEF Z velocity in meters per second.
   */
  ecefvz?: number;

  /**
   * ECEF velocity error in meters per second.
   * Certainty unknown.
   */
  ecefvAcc?: number;

  /**
   * Estimated climb error in meters per second.
   * Certainty unknown.
   */
  epc?: number;

  /**
   * Estimated track (direction) error in degrees.
   * Certainty unknown.
   */
  epd?: number;

  /**
   * Estimated horizontal Position (2D) Error in meters.
   * Also known as Estimated Position Error (epe).
   * Certainty unknown.
   */
  eph?: number;

  /**
   * Estimated speed error in meters per second.
   * Certainty unknown.
   */
  eps?: number;

  /**
   * Estimated time stamp error in seconds.
   * Certainty unknown.
   */
  ept?: number;

  /**
   * Longitude error estimate in meters.
   * Certainty unknown.
   */
  epx?: number;

  /**
   * Latitude error estimate in meters.
   * Certainty unknown.
   */
  epy?: number;

  /**
   * Estimated vertical error in meters.
   * Certainty unknown.
   */
  epv?: number;

  /**
   * Geoid separation is the difference between the WGS84 reference ellipsoid and the geoid (Mean Sea Level) in meters.
   * Almost no GNSS receiver specifies how they compute their geoid.
   * gpsd interpolates the geoid from a 5x5 degree table of EGM2008 values when the receiver does not supply a geoid separation.
   * The gpsd computed geoidSep is usually within one meter of the "true" value, but can be off as much as 12 meters.
   */
  geoidSep?: number;

  /**
   * Jamming Indicator 0 (no jamming) to 255 (severe jamming).
   * -1 means unset.
   */
  jam?: number;

  /**
   * Latitude in degrees: +/- signifies North/South.
   */
  lat?: number;

  /**
   * Current leap seconds.
   */
  leapseconds?: number;

  /**
   * Longitude in degrees: +/- signifies East/West.
   */
  lon?: number;

  /**
   * Course over ground, degrees magnetic.
   */
  magtrack?: number;

  /**
   * Magnetic variation, degrees.
   * Also known as the magnetic declination (the direction of the horizontal component of the magnetic field measured clockwise from north) in degrees, Positive is West variation.
   * Negative is East variation.
   */
  magvar?: number;

  /**
   * Down component of relative position vector in meters.
   */
  relD?: number;

  /**
   * East component of relative position vector in meters.
   */
  relE?: number;

  /**
   * North component of relative position vector in meters.
   */
  relN?: number;

  /**
   * Estimated Spherical (3D) Position Error in meters.
   * Guessed to be 95% confidence, but many GNSS receivers do not specify, so certainty unknown.
   */
  sep?: number;

  /**
   * Speed over ground, meters per second.
   */
  speed?: number;

  /**
   * "GPS fix status"
   */
  status?: GpsFixStatus;

  /**
   * Receiver temperature in degrees Celsius.
   */
  temp?: number;

  /**
   * Time/date stamp in ISO8601 format, UTC.
   * May have a fractional part of up to .001sec precision.
   * May be absent if the mode is not 2D or 3D.
   * May be present, but invalid, if there is no fix.
   * Verify 3 consecutive 3D fixes before believing it is UTC.
   * Even then it may be off by several seconds until the current leap seconds is known.
   */
  time?: string;

  /**
   * Course over ground, degrees from true north.
   */
  track?: number;

  /**
   * Down velocity component in meters.
   */
  velD?: number;

  /**
   * East velocity component in meters.
   */
  velE?: number;

  /**
   * North velocity component in meters.
   */
  velN?: number;

  /**
   * Wind angle magnetic in degrees.
   */
  wanglem?: number;

  /**
   * Wind angle relative in degrees.
   */
  wangler?: number;

  /**
   * Wind angle true in degrees.
   */
  wanglet?: number;

  /**
   * Wind speed relative in meters per second.
   */
  wspeedr?: number;

  /**
   * Wind speed true in meters per second.
   */
  wspeedt?: number;

  /**
   * Water temperature in degrees Celsius.
   */
  wtemp?: number;
}
