enum NmeaMode {
  Unknown = 0, // unknown
  NoFix = 1, // no fix
  TwoD = 2, // 2D
  ThreeD = 3, // 3D
}

enum AntennaStatus {
  Short = 2, // Short
  Open = 3, // Open
}

enum GpsFixStatus {
  Unknown = 0, // Unknown
  Normal = 1, // Normal
  DGPS = 2, // DGPS
  RTKFixed = 3, // RTK Fixed
  RTKFloating = 4, // RTK Floating
  DR = 5, // DR
  GNSSDR = 6, // GNSSDR
  Time = 7, // Time (surveyed)
  Simulated = 8, // Simulated
  PY = 9, // P(Y)
}

export interface TPV {
  class: "TPV"; // Fixed: "TPV"
  device?: string; // Name of the originating device.
  mode: NmeaMode; // NMEA mode.
  alt?: number; // Deprecated. Undefined. Use altHAE or altMSL.
  altHAE?: number; // Altitude, height above ellipsoid, in meters. Probably WGS84.
  altMSL?: number; // MSL Altitude in meters. The geoid used is rarely specified and is often inaccurate. See the comments below on geoidSep. altMSL is altHAE minus geoidSep.
  ant?: AntennaStatus; //Antenna Status.
  climb?: number; // Climb (positive) or sink (negative) rate, meters per second.
  clockbias?: number; // Offset of local GNSS clock relative to UTC, in ns. AKA Clock Offset. Sometimes given as Part Per Billion (ppb) which is the same as ns.
  clockdrift?: number; // The rate at which the local clock is drifting. In ns/s.
  datum?: number; // Current datum. Hopefully WGS84.
  depth?: number; // Depth in meters. Probably depth below the keel…​
  dgpsAge?: number; // Age of DGPS data. In seconds
  dgpsSta?: number; // Station of DGPS data.
  ecefx?: number; // ECEF X position in meters.
  ecefy?: number; // ECEF Y position in meters.
  ecefz?: number; // ECEF Z position in meters.
  ecefpAcc?: number; // ECEF position error in meters. Certainty unknown.
  ecefvx?: number; // ECEF X velocity in meters per second.
  ecefvy?: number; // ECEF Y velocity in meters per second.
  ecefvz?: number; // ECEF Z velocity in meters per second.
  ecefvAcc?: number; // ECEF velocity error in meters per second. Certainty unknown.
  epc?: number; // Estimated climb error in meters per second. Certainty unknown.
  epd?: number; // Estimated track (direction) error in degrees. Certainty unknown.
  eph?: number; // Estimated horizontal Position (2D) Error in meters. Also known as Estimated Position Error (epe). Certainty unknown.
  eps?: number; // Estimated speed error in meters per second. Certainty unknown.
  ept?: number; // Estimated time stamp error in seconds. Certainty unknown.
  epx?: number; // Longitude error estimate in meters. Certainty unknown.
  epy?: number; // Latitude error estimate in meters. Certainty unknown.
  epv?: number; // Estimated vertical error in meters. Certainty unknown.
  geoidSep?: number; // Geoid separation is the difference between the WGS84 reference ellipsoid and the geoid (Mean Sea Level) in meters. Almost no GNSS receiver specifies how they compute their geoid. gpsd interpolates the geoid from a 5x5 degree table of EGM2008 values when the receiver does not supply a geoid separation. The gpsd computed geoidSep is usually within one meter of the "true" value, but can be off as much as 12 meters.
  jam?: number; // Jamming Indicator 0 (no jamming) to 255 (severe jamming). -1 means unset.
  lat?: number; // Latitude in degrees: +/- signifies North/South.
  leapseconds?: number; // Current leap seconds.
  lon?: number; // Longitude in degrees: +/- signifies East/West.
  magtrack?: number; // Course over ground, degrees magnetic.
  magvar?: number; // Magnetic variation, degrees. Also known as the magnetic declination (the direction of the horizontal component of the magnetic field measured clockwise from north) in degrees, Positive is West variation. Negative is East variation.
  relD?: number; // Down component of relative position vector in meters.
  relE?: number; // East component of relative position vector in meters.
  relN?: number; // North component of relative position vector in meters.
  sep?: number; // Estimated Spherical (3D) Position Error in meters. Guessed to be 95% confidence, but many GNSS receivers do not specify, so certainty unknown.
  speed?: number; // Speed over ground, meters per second.
  status?: GpsFixStatus; // "GPS fix status"
  temp?: number; // Receiver temperature in degrees Celsius.
  time?: string; // Time/date stamp in ISO8601 format, UTC. May have a fractional part of up to .001sec precision. May be absent if the mode is not 2D or 3D. May be present, but invalid, if there is no fix. Verify 3 consecutive 3D fixes before believing it is UTC. Even then it may be off by several seconds until the current leap seconds is known.
  track?: number; // Course over ground, degrees from true north.
  velD?: number; // Down velocity component in meters.
  velE?: number; // East velocity component in meters.
  velN?: number; // North velocity component in meters.
  wanglem?: number; // Wind angle magnetic in degrees.
  wangler?: number; // Wind angle relative in degrees.
  wanglet?: number; // Wind angle true in degrees.
  wspeedr?: number; // Wind speed relative in meters per second.
  wspeedt?: number; // Wind speed true in meters per second.
  wtemp?: number; // Water temperature in degrees Celsius.
}

enum QualityIndicator {
  NoSignal = 0, // no signal
  SearchingSignal = 1, // searching signal
  SignalAcquired = 2, // signal acquired
  SignalDetectedButUnusable = 3, // signal detected but unusable
  CodeLockedAndTimeSynchronized = 4, // code locked and time synchronized
  CodeAndCarrierLockedAndTimeSynchronized5 = 5, // code and carrier locked and time synchronized
  CodeAndCarrierLockedAndTimeSynchronized6 = 6, // code and carrier locked and time synchronized
  CodeAndCarrierLockedAndTimeSynchronized7 = 7, // code and carrier locked and time synchronized
}

interface Satellite {
  PRN: number; // PRN ID of the satellite. See "PRN, GNSS id, SV id, and SIG id"
  az?: number; // Azimuth, degrees from true north.
  el?: number; // Elevation in degrees.
  freqid?: number; // For GLONASS satellites only: the frequency ID of the signal. As defined by u-blox, range 0 to 13. The freqid is the frequency slot plus 7.
  gnssid?: number; // The GNSS ID. See "PRN, GNSS id, SV id, and SIG id"
  health?: number; // The health of this satellite. 0 is unknown, 1 is OK, and 2 is unhealthy.
  ss?: number; // Signal to Noise ratio in dBHz.
  sigid?: number; // The signal ID of this signal. See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA. See u-blox doc for details.
  svid?: number; // The satellite ID (PRN) within its constellation. See "<<PRNs>"
  used?: boolean; // Used in current solution? (SBAS/WAAS/EGNOS satellites may be flagged used if the solution has corrections from them, but not all drivers make this information available.)
}

export interface SKY {
  class: "SKY"; // Fixed: "SKY"
  device?: string; // Name of originating device
  nSat?: number; // Number of satellite objects in "satellites" array.
  gdop?: number; // Geometric (hyperspherical) dilution of precision, a combination of PDOP and TDOP. A dimensionless factor which should be multiplied by a base UERE to get an error estimate.
  hdop?: number; // Horizontal dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get a circular error estimate.
  pdop?: number; // Position (spherical/3D) dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
  pr?: number; // Pseudorange, in meters.
  prRate?: number; // Pseudorange Rate of Change, in meters / second.
  prRes?: number; // Pseudorange residue, in meters.
  qual?: QualityIndicator; // Quality Indicator.
  satellites?: Satellite[]; // List of satellite objects in skyview
  tdop?: number; // Time dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
  time?: number; // Time/date stamp in ISO8601 format, UTC. May have a fractional part of up to .001sec precision.
  uSat?: number; // Number of satellites used in navigation solution.
  vdop?: number; // Vertical (altitude) dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate.
  xdop?: number; // Longitudinal dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate. A.k.a. Northing DOP.
  ydop?: number; // Latitudinal dilution of precision, a dimensionless factor which should be multiplied by a base UERE to get an error estimate. A.k.a. Easting DOP.
}

export interface GST {
  class: "GST"; // Fixed: "GST"
  device?: string; // Name of originating device
  time?: string; // Time/date stamp in ISO8601 format, UTC. May have a fractional part of up to .001sec precision.
  rms?: number; // Value of the standard deviation of the range inputs to the navigation process (range inputs include pseudoranges and DGPS corrections).
  major?: number; // Standard deviation of semi-major axis of error ellipse, in meters.
  minor?: number; // Standard deviation of semi-minor axis of error ellipse, in meters.
  orient?: number; // Orientation of semi-major axis of error ellipse, in degrees from true north.
  alt?: number; // Standard deviation of altitude error, in meters.
  lat?: number; // Standard deviation of latitude error, in meters.
  lon?: number; // Standard deviation of longitude error, in meters.
  ve?: number; // Standard deviation of East velocity error, in meters / second.
  vn?: number; // Standard deviation of North velocity error, in meters / second.
  vu?: number; // Standard deviation of Up velocity error, in meters / second.
}

// The heading, pitch, and roll status codes (if present) vary by device. For the TNT Revolution digital compasses, they are coded as follows:
export type StatusCode =
  | "C" // magnetometer calibration alarm
  | "L" // low alarm
  | "M" // low warning
  | "N" // normal
  | "O" // high warning
  | "P" // high alarm
  | "V"; // magnetometer voltage level alarm

export interface ATT {
  class: "ATT"; // Fixed: "ATT"
  device: string; // Name of originating device
  time?: string; // Time/date stamp in ISO8601 format, UTC. May have a fractional part of up to .001sec precision.
  timeTag?: string; // Arbitrary time tag of measurement.
  heading?: number; // Heading, degrees from true north.
  mag_st?: StatusCode; // Magnetometer status.
  mheading?: number; // Heading, degrees from magnetic north.
  pitch?: number; // Pitch in degrees.
  pitch_st?: StatusCode; // Pitch sensor status.
  rot?: number; // Rate of Turn in dgrees per minute.
  yaw?: number; // Yaw in degrees
  yaw_st?: StatusCode; // Yaw sensor status.
  roll?: number; // Roll in degrees.
  roll_st?: StatusCode; // Roll sensor status.
  dip?: number; // Local magnetic inclination, degrees, positive when the magnetic field points downward (into the Earth).
  mag_len?: number; // Scalar magnetic field strength.
  mag_x?: number; // X component of magnetic field strength.
  mag_y?: number; // Y component of magnetic field strength.
  mag_z?: number; // Z component of magnetic field strength.
  acc_len?: number; // Scalar acceleration.
  acc_x?: number; // X component of acceleration (m/s^2).
  acc_y?: number; // Y component of acceleration (m/s^2).
  acc_z?: number; // Z component of acceleration (m/s^2).
  gyro_x?: number; // X component of angular rate (deg/s)
  gyro_y?: number; // Y component of angular rate (deg/s)
  gyro_z?: number; // Z component of angular rate (deg/s)
  depth?: number; // Water depth in meters.
  temp?: number; // Temperature at the sensor, degrees centigrade.
}

export interface IMU {
  class: "IMU"; // Fixed: "IMU"
}

export interface TOFF {
  class: "TOFF"; // Fixed: "TOFF"
  device: string; // Name of the originating device
  real_sec: number; // seconds from the GPS clock
  real_nsec: number; // nanoseconds from the GPS clock
  clock_sec: number; // seconds from the system clock
  clock_nsec: number; // nanoseconds from the system clock
}

export interface PPS {
  class: "PPS"; // Fixed: "PPS"
  device: string; // Name of the originating device
  real_sec: number; // seconds from the PPS source
  real_nsec: number; // nanoseconds from the PPS source
  clock_sec: number; // seconds from the system clock
  clock_nsec: number; // nanoseconds from the system clock
  precision: number; // NTP style estimate of PPS precision
  shm: string; // shm key of this PPS
  qErr?: number; // Quantization error of the PPS, in picoseconds. Sometimes called the "sawtooth" error.
}

export interface OSC {
  class: "OSC"; // Fixed: "OSC"
  device: string; // Name of the originating device.
  running: boolean; // If true, the oscillator is currently running. Oscillators may require warm-up time at the start of the day.
  reference: boolean; // If true, the oscillator is receiving a GPS PPS signal.
  disciplined: boolean; // If true, the GPS PPS signal is sufficiently stable and is being used to discipline the local oscillator.
  delta: number; // The time difference (in nanoseconds) between the GPS-disciplined oscillator PPS output pulse and the most recent GPS PPS input pulse.
}

type GpsdResponseMap = {
  TPV: TPV;
  SKY: SKY;
  GST: GST;
  ATT: ATT;
  IMU: IMU;
  TOFF: TOFF;
  PPS: PPS;
  OSC: OSC;
};

export type GpsdResponseByClass<T extends keyof GpsdResponseMap> =
  GpsdResponseMap[T];

export type GpsdResponse = TPV | SKY | GST | ATT | IMU | TOFF | PPS | OSC;
export type GpsdClassTypes = GpsdResponse extends { class: infer U } ? U
  : never;
