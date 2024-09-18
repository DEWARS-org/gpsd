import { Gpsd } from "./lib/gpsd.ts";
import type {
  ATT,
  GST,
  IMU,
  OSC,
  PPS,
  Satellite,
  SKY,
  StatusCode,
  TOFF,
  TPV,
} from "./lib/types.ts";
import {
  AntennaStatus,
  GpsFixStatus,
  NmeaMode,
  QualityIndicator,
} from "./lib/types.ts";

export { Gpsd };
// TPV
export { AntennaStatus, GpsFixStatus, NmeaMode, type TPV };
// SKY
export { QualityIndicator, type Satellite, type SKY };
// GST
export type { GST };
// ATT
export type { ATT, StatusCode };
// IMU
export type { IMU };
// TOFF
export type { TOFF };
// PPS
export type { PPS };
// OSC
export type { OSC };
