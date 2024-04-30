export interface Versions {
  $schema?: string;
  chainName: string;
  versions: {
    name: string;
    tag?: string;
    height?: number;
    proposal?: number;
    previousVersionName?: string;
    nextVersionName?: string;
    recommendedVersion?: string;
    compatibleVersions?: string[];
    cosmosSdkVersion?: string;
    consensus?: {
      type: "tendermint" | "cometbft";
      version?: string;
    };
    cosmwasmVersion?: string;
    cosmwasmEnabled?: boolean;
    cosmwasmPath?: string;
    ibcGoVersion?: string;
    goVersion?: string;
    icsEnabled?: ("ics20-1" | "ics27-1" | "mauth")[];
    binaries?: {
      "linux/amd64"?: string;
      "linux/arm64"?: string;
      "darwin/amd64"?: string;
      "darwin/arm64"?: string;
      "windows/amd64"?: string;
      "windows/arm64"?: string;
    };
  }[];
}