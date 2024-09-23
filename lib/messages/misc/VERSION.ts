export interface VERSION {
  /**
   * Fixed: "VERSION"
   */
  class: "VERSION";

  /**
   * Public release level
   */
  release: string;

  /**
   * Internal revision-control level.
   */
  rev: string;

  /**
   * API major revision level.
   */
  proto_major: number;

  /**
   * API minor revision level.
   */
  proto_minor: number;

  /**
   * URL of the remote daemon reporting this version.
   * If empty, this is the version of the local daemon.
   */
  remote?: string;
}
