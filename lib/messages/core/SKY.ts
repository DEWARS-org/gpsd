export enum QualityIndicator {
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

export enum GNSSId {
  /**
   * GPS
   * svid (native PRN): 1-32
   */
  GP = 0,

  /**
   * SBAS
   * svid (native PRN): 120-158
   */
  SB = 1,

  /**
   * Galileo
   * svid (native PRN): 1-36
   */
  GA = 2,

  /**
   * BeiDou
   * svid (native PRN): 1-37
   */
  BD = 3,

  /**
   * IMES
   * svid (native PRN): 1-10
   */
  IM = 4,

  /**
   * QZSS
   * svid (native PRN): 1-7
   */
  QZ = 5,

  /**
   * GLONASS
   * svid (native PRN): 1-32, 255
   */
  GL = 6,

  /**
   * NavIC (IRNSS)
   * svid (native PRN): 1-11
   */
  IR = 7,
}

export enum SigIdBeiDou {
  /**
   * BeiDou
   * B1I D1
   */
  B1I_D1 = 0,

  /**
   * BeiDou
   * B1I D2
   */
  B1I_D2 = 1,

  /**
   * BeiDou
   * B2I D1
   */
  B2I_D1 = 2,

  /**
   * BeiDou
   * B2I D2
   */
  B2I_D2 = 3,

  /**
   * BeiDou
   * B2a
   */
  B2a = 7,
}

export enum SigIdGalileo {
  /**
   * Galileo
   * E1 C
   */
  E1_C = 0,

  /**
   * Galileo
   * E1 B
   */
  E1_B = 1,

  /**
   * Galileo
   * E5 aI
   */
  E5_aI = 3,

  /**
   * Galileo
   * E5 aQ
   */
  E5_aQ = 4,

  /**
   * Galileo
   * E5 bl
   */
  E5_bl = 5,

  /**
   * Galileo
   * E5 bQ
   */
  E5_bQ = 6,
}

export enum SigIdGLONASS {
  /**
   * GLONASS
   * L1 OF
   */
  L1_OF = 0,

  /**
   * GLONASS
   * L2 OF
   */
  L2_OF = 2,
}

export enum SigIdGPS {
  /**
   * GPS
   * L1C/A
   */
  L1C_A = 0,

  /**
   * GPS
   * L2 CL
   */
  L2_CL = 3,

  /**
   * GPS
   * L2 CM
   */
  L2_CM = 4,

  /**
   * GPS
   * L5 I
   */
  L5_I = 6,

  /**
   * GPS
   * L5 Q
   */
  L5_Q = 7,
}

export enum SigIdIRNSS {}

export enum SigIdQZSS {
  /**
   * QZSS
   * L1C/A
   */
  L1C_A = 0,

  /**
   * QZSS
   * L2 CM
   */
  L2_CM = 4,

  /**
   * QZSS
   * L2 CL
   */
  L2_CL = 5,
}

export enum SigIdSBAS {
  /**
   * SBAS
   * L1C/A
   */
  L1C_A = 0,
}

export enum SigIdIMES {}

export interface BaseSatellite {
  /**
   * Azimuth, degrees from true north.
   */
  az?: number;

  /**
   * Elevation in degrees.
   */
  el?: number;

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
   * Used in current solution? (SBAS/WAAS/EGNOS satellites may be flagged used if the solution has corrections from them, but not all drivers make this information available.)
   */
  used?: boolean;
}

export interface SatelliteGPS extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: GNSSId.GP;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdGPS;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 1-32
   */
  svid?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32;
}

export interface SatelliteSBAS extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: GNSSId.SB;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdSBAS;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 120-158
   */
  svid?:
    | 120
    | 121
    | 122
    | 123
    | 124
    | 125
    | 126
    | 127
    | 128
    | 129
    | 130
    | 131
    | 132
    | 133
    | 134
    | 135
    | 136
    | 137
    | 138
    | 139
    | 140
    | 141
    | 142
    | 143
    | 144
    | 145
    | 146
    | 147
    | 148
    | 149
    | 150
    | 151
    | 152
    | 153
    | 154
    | 155
    | 156
    | 157
    | 158;
}

export interface SatelliteGalileo extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: GNSSId.GA;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdGalileo;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 1-36
   */
  svid?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36;
}

export interface SatelliteBeiDou extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: GNSSId.BD;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdBeiDou;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 1-37
   */
  svid?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37;
}

export interface SatelliteIMES extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: GNSSId.IM;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdIMES;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 1-10
   */
  svid?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10;
}

export interface SatelliteQZSS extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: GNSSId.QZ;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdQZSS;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 1-7
   */
  svid?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7;
}

export interface SatelliteGLONASS extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

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
  gnssid?: GNSSId.GL;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdGLONASS;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 1-32, 255
   */
  svid?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 255;
}

export interface SatelliteIRNSS extends BaseSatellite {
  /**
   * PRN ID of the satellite.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  PRN: number;

  /**
   * The GNSS ID.
   * See "PRN, GNSS id, SV id, and SIG id"
   */
  gnssid?: GNSSId.IR;

  /**
   * The signal ID of this signal.
   * See "PRN, GNSS id, SV id, and SIG id" u-blox, not NMEA.
   * See u-blox doc for details.
   */
  sigid?: SigIdIRNSS;

  /**
   * The satellite ID (PRN) within its constellation.
   * svid (native PRN): 1-11
   */
  svid?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11;
}

export type Satellite =
  | SatelliteGPS
  | SatelliteSBAS
  | SatelliteGalileo
  | SatelliteBeiDou
  | SatelliteIMES
  | SatelliteQZSS
  | SatelliteGLONASS
  | SatelliteIRNSS;

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
