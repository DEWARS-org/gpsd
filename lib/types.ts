enum NmeaMode {
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

enum AntennaStatus {
  /**
   * Short
   */
  Short = 2,

  /**
   * Open
   */
  Open = 3,
}

enum GpsFixStatus {
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
  ant?: AntennaStatus; //Antenna Status.
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
   * Almost no GNSS receiver specifies how they compute their geoid. gpsd interpolates the geoid from a 5x5 degree table of EGM2008 values when the receiver does not supply a geoid separation.
   * The gpsd computed geoidSep is usually within one meter of the "true" value, but can be off as much as 12 meters.
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

enum QualityIndicator {
  /**
   * no signal
   */
  NoSignal = 0,

  /**
   * searching signal
   */
  SearchingSignal = 1,

  /**
   * signal acquired
   */
  SignalAcquired = 2,

  /**
   * signal detected but unusable
   */
  SignalDetectedButUnusable = 3,

  /**
   * code locked and time synchronized
   */
  CodeLockedAndTimeSynchronized = 4,

  /**
   * code and carrier locked and time synchronized
   */
  CodeAndCarrierLockedAndTimeSynchronized5 = 5,

  /**
   * code and carrier locked and time synchronized
   */
  CodeAndCarrierLockedAndTimeSynchronized6 = 6,

  /**
   * code and carrier locked and time synchronized
   */
  CodeAndCarrierLockedAndTimeSynchronized7 = 7,
}

interface Satellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;
  /**
   * Azimuth, degrees from true north.
   */
  az?: number;
  /**
   * Elevation in degrees.
   */
  el?: number;
  /**
   * For GLONASS satellites only: the frequency ID of the signal.
   * As defined by u-blox, range 0 to 13.
   * The freqid is the frequency slot plus 7.
   */
  freqid?: number;
  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: number;
  /**
   * The health of this satellite.
   * 0 is unknown, 1 is OK, and 2 is unhealthy.
   */
  health?: number;
  /**
   * Signal to Noise ratio in dBHz.
   */
  ss?: number;
  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: number;
  /**
   * The satellite ID (PRN) within its constellation.
   * See "<<PRNs>"
   */
  svid?: number;
  /**
   * Used in current solution? (SBAS/WAAS/EGNOS satellites may be flagged used if the solution has corrections from them, but not all drivers make this information available.)
   */
  used?: boolean;
}

export interface SKY {
  /**
   * Fixed: "SKY"
   */
  class: "SKY";
  /**
   * Name of originating device
   */
  device?: string;
  /**
   * Number of satellite objects in "satellites" array.
   */
  nSat?: number;
  /**
   * Geometric (hyperspherical) dilution of precision, a combination of PDOP and TDOP.
   * A dimensionless factor which should be multiplied by a base UERE to get an error estimate.
   */
  gdop?: number;
  /**
   * Horizontal dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get a circular error estimate.
   */
  hdop?: number;
  /**
   * Position (spherical/3D) dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
   */
  pdop?: number;
  /**
   * Pseudorange, in meters.
   */
  pr?: number;
  /**
   * Pseudorange Rate of Change, in meters / second.
   */
  prRate?: number;
  /**
   * Pseudorange residue, in meters.
   */
  prRes?: number;
  /**
   * Quality Indicator.
   */
  qual?: QualityIndicator;
  /**
   * List of satellite objects in skyview
   */
  satellites?: Satellite[];
  /**
   * Time dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
   */
  tdop?: number;
  /**
   * Time/date stamp in ISO8601 format, UTC.
   * May have a fractional part of up to .001sec precision.
   */
  time?: number;
  /**
   * Number of satellites used in navigation solution.
   */
  uSat?: number;
  /**
   * Vertical (altitude) dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
   */
  vdop?: number;
  /**
   * Longitudinal dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
   * A.k.a. Northing DOP.
   */
  xdop?: number;
  /**
   * Latitudinal dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
   * A.k.a. Easting DOP.
   */
  ydop?: number;
}

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

/**
 *
 */
// The heading, pitch, and roll status codes (if present) vary by device.
// * For the TNT Revolution digital compasses, they are coded as follows:
export type StatusCode =
/**
 * magnetometer calibration alarm
 */
| "C"
/**
 * low alarm
 */
| "L"
/**
 * low warning
 */
| "M"
/**
 * normal
 */
| "N"
/**
 * high warning
 */
| "O"
/**
 * high alarm
 */
| "P"
/**
 * magnetometer voltage level alarm
 */
| "V";

export interface ATT {
  /**
   * Fixed: "ATT"
   */
  class: "ATT";
  /**
   * Name of originating device
   */
  device: string;
  /**
   * Time/date stamp in ISO8601 format, UTC.
   * May have a fractional part of up to .001sec precision.
   */
  time?: string;
  /**
   * Arbitrary time tag of measurement.
   */
  timeTag?: string;
  /**
   * Heading, degrees from true north.
   */
  heading?: number;
  /**
   * Magnetometer status.
   */
  mag_st?: StatusCode;
  /**
   * Heading, degrees from magnetic north.
   */
  mheading?: number;
  /**
   * Pitch in degrees.
   */
  pitch?: number;
  /**
   * Pitch sensor status.
   */
  pitch_st?: StatusCode;
  /**
   * Rate of Turn in dgrees per minute.
   */
  rot?: number;
  /**
   * Yaw in degrees
   */
  yaw?: number;
  /**
   * Yaw sensor status.
   */
  yaw_st?: StatusCode;
  /**
   * Roll in degrees.
   */
  roll?: number;
  /**
   * Roll sensor status.
   */
  roll_st?: StatusCode;
  /**
   * Local magnetic inclination, degrees, positive when the magnetic field points downward (into the Earth).
   */
  dip?: number;
  /**
   * Scalar magnetic field strength.
   */
  mag_len?: number;
  /**
   * X component of magnetic field strength.
   */
  mag_x?: number;
  /**
   * Y component of magnetic field strength.
   */
  mag_y?: number;
  /**
   * Z component of magnetic field strength.
   */
  mag_z?: number;
  /**
   * Scalar acceleration.
   */
  acc_len?: number;
  /**
   * X component of acceleration (m/s^2).
   */
  acc_x?: number;
  /**
   * Y component of acceleration (m/s^2).
   */
  acc_y?: number;
  /**
   * Z component of acceleration (m/s^2).
   */
  acc_z?: number;
  /**
   * X component of angular rate (deg/s)
   */
  gyro_x?: number;
  /**
   * Y component of angular rate (deg/s)
   */
  gyro_y?: number;
  /**
   * Z component of angular rate (deg/s)
   */
  gyro_z?: number;
  /**
   * Water depth in meters.
   */
  depth?: number;
  /**
   * Temperature at the sensor, degrees centigrade.
   */
  temp?: number;
}

export interface IMU {
  /**
   * Fixed: "IMU"
   */
  class: "IMU";
}

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

export type GpsdMessage = TPV | SKY | GST | ATT | IMU | TOFF | PPS | OSC;

export type GpsdClass = GpsdMessage extends { class: infer U } ? U
  : never;

type GpsdMessageMap = {
  [K in GpsdMessage as K["class"]]: K;
};

export type MessageByClass<T extends GpsdClass> = GpsdMessageMap[T];
