import type { ATT } from "./lib/messages/core/ATT.ts";
import type { GST } from "./lib/messages/core/GST.ts";
import type { IMU } from "./lib/messages/core/IMU.ts";
import type { OSC } from "./lib/messages/core/OSC.ts";
import type { PPS } from "./lib/messages/core/PPS.ts";
import type { SKY } from "./lib/messages/core/SKY.ts";
import type { TOFF } from "./lib/messages/core/TOFF.ts";
import type { TPV } from "./lib/messages/core/TPV.ts";

export { Gpsd } from "./lib/gpsd.ts";

export type GpsdMessage = TPV | SKY | GST | ATT | IMU | TOFF | PPS | OSC;

export type GpsdClass = GpsdMessage extends { class: infer U } ? U : never;

type GpsdMessageMap = {
  [K in GpsdMessage as K["class"]]: K;
};

export type MessageByClass<T extends GpsdClass> = GpsdMessageMap[T];
/**
 * Core messages
 */
// TPV
export {
  AntennaStatus,
  GpsFixStatus,
  NmeaMode,
} from "./lib/messages/core/TPV.ts";
export type { TPV } from "./lib/messages/core/TPV.ts";
// SKY
export type {
  BaseSatellite,
  Satellite,
  SatelliteBeiDou,
  SatelliteGalileo,
  SatelliteGLONASS,
  SatelliteGPS,
  SatelliteIMES,
  SatelliteIRNSS,
  SatelliteQZSS,
  SatelliteSBAS,
  SKY,
} from "./lib/messages/core/SKY.ts";
export {
  GNSSId,
  QualityIndicator,
  SigIdBeiDou,
  SigIdGalileo,
  SigIdGLONASS,
  SigIdGPS,
  SigIdIMES,
  SigIdIRNSS,
  SigIdQZSS,
  SigIdSBAS,
} from "./lib/messages/core/SKY.ts";
// GST
export type { GST } from "./lib/messages/core/GST.ts";
// ATT
export type { ATT, StatusCode } from "./lib/messages/core/ATT.ts";
// IMU
export type { IMU } from "./lib/messages/core/IMU.ts";
// TOFF
export type { TOFF } from "./lib/messages/core/TOFF.ts";
// PPS
export type { PPS } from "./lib/messages/core/PPS.ts";
// OSC
export type { OSC } from "./lib/messages/core/OSC.ts";

/**
 * Misc messages
 */
// DEVICE
export { DeviceFlag } from "./lib/messages/misc/DEVICE.ts";
export type { DEVICE } from "./lib/messages/misc/DEVICE.ts";

// DEVICES
export type { DEVICES } from "./lib/messages/misc/DEVICES.ts";

// ERROR
export type { ERROR } from "./lib/messages/misc/ERROR.ts";

// POLL
export type { POLL } from "./lib/messages/misc/POLL.ts";

// VERSION
export type { VERSION } from "./lib/messages/misc/VERSION.ts";

// WATCH
export type { WATCH } from "./lib/messages/misc/WATCH.ts";
