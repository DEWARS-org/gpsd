import { Gpsd } from "./lib/gpsd.ts";
import type {
  ATT,
  StatusCode,
  GST,
  IMU,
  OSC,
  PPS,
  Satellite,
  SKY,
  TOFF,
  TPV,
} from "./lib/types.ts";
import {
  AntennaStatus,
  GpsFixStatus,
  NmeaMode,
  QualityIndicator,
} from "./lib/types.ts";

export {
  Gpsd,
  // TPV
  NmeaMode,
  AntennaStatus,
  GpsFixStatus,
  type TPV,
  // SKY
  QualityIndicator,
  type Satellite,
  type SKY,
  // GST
  type GST,
  // ATT
  type StatusCode,
  type ATT,
  // IMU
  type IMU,
  // TOFF
  type TOFF,
  // PPS
  type PPS,
  // OSC
  type OSC,
};
