export interface Versions {
  $schema?: string;
  chain_name: string;
  versions: {
    name: string;
    tag?: string;
    height?: number;
    proposal?: number;
    previous_version_name?: string;
    next_version_name?: string;
    recommended_version?: string;
    compatible_versions?: string[];
    cosmos_sdk_version?: string;
    consensus?: {
      type: "tendermint" | "cometbft";
      version?: string;
    };
    cosmwasm_version?: string;
    cosmwasm_enabled?: boolean;
    cosmwasm_path?: string;
    ibc_go_version?: string;
    go_version?: string;
    ics_enabled?: ("ics20-1" | "ics27-1" | "mauth")[];
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