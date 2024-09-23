/**
 * The heading, pitch, and roll status codes (if present) vary by device.
 * For the TNT Revolution digital compasses, they are coded as follows:
 */
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

export interface ATTBase {
  /**
   * Fixed: "ATT"
   */
  class: "ATT" | "IMU";

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

export interface ATT extends ATTBase {
  /**
   * Fixed: "ATT"
   */
  class: "ATT";
}
