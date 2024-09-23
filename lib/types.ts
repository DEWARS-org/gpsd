import type { ATT } from "./messages/core/ATT.ts";
export type { StatusCode } from "./messages/core/ATT.ts";
import type { GST } from "./messages/core/GST.ts";
import type { IMU } from "./messages/core/IMU.ts";
import type { OSC } from "./messages/core/OSC.ts";
import type { PPS } from "./messages/core/PPS.ts";
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
} from "./messages/core/SKY.ts";
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
} from "./messages/core/SKY.ts";
import type { SKY } from "./messages/core/SKY.ts";
import type { TOFF } from "./messages/core/TOFF.ts";
import type { TPV } from "./messages/core/TPV.ts";
export { AntennaStatus, GpsFixStatus, NmeaMode } from "./messages/core/TPV.ts";

export type GpsdMessage = TPV | SKY | GST | ATT | IMU | TOFF | PPS | OSC;

export type GpsdClass = GpsdMessage extends { class: infer U } ? U : never;

type GpsdMessageMap = {
  [K in GpsdMessage as K["class"]]: K;
};

export type MessageByClass<T extends GpsdClass> = GpsdMessageMap[T];

export type { ATT, GST, IMU, OSC, PPS, SKY, TOFF, TPV };
