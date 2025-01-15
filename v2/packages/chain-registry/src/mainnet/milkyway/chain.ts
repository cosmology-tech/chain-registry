import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'milkyway',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://milkyway.zone/',
  prettyName: 'MilkyWay',
  chainType: 'cosmos',
  chainId: 'milkyway',
  bech32Prefix: 'milk',
  daemonName: 'milkywayd',
  nodeHome: '$HOME/.milkywayd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.0035
      },
      {
        denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.0035
      },
      {
        denom: 'ibc/8D4FC51F696E03711B9B37A5787FB89BD2DDBAF788813478B002D552A12F9157',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.0035
      },
      {
        denom: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.0035
      },
      {
        denom: 'ibc/4795C86F72EC2CB54E885A4A5B401BED9C333E008311ED9C4DE01BF546B44A21',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.0035
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'umilk'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/milkyway-labs/milkyway',
    genesis: {
      name: 'v2',
      genesisUrl: 'https://github.com/milkyway-labs/networks/raw/main/mainnet/genesis.json'
    },
    recommendedVersion: 'v2.0.2',
    compatibleVersions: [
      'v2.0.0',
      'v2.0.1',
      'v2.0.2'
    ],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15',
      repo: 'https://github.com/cometbft/cometbft',
      tag: 'v0.38.15'
    },
    binaries: {
      "linux/amd64": 'https://github.com/milkyway-labs/milkyway/releases/download/v2.0.0/milkywayd-2.0.0-linux-amd64'
    },
    language: {
      type: 'go',
      version: '1.23'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.50.10',
      tag: 'v0.50.10'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: 'v0.53.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.53.0',
      enabled: true
    }
  },
  images: [{
      imageSync: {
        chainName: 'milkyway',
        baseDenom: 'umilk'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.svg',
      theme: {
        primaryColorHex: '#9182FD'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.svg'
  },
  description: 'MilkyWay (MILK) is the first modular staking portal, designed to redefine security and scalability within the modular ecosystem. As a pioneer of modular staking, MilkyWay integrates liquid staking and restaking solutions to address fragmented trust and enhance crypto-economic security across networks.\n\nLaunched in December 2023 as the first liquid staking solution for the Celestia ecosystem, MilkyWay empowered users to unlock staked TIA positions and engage with various DeFi protocols. This initial phase introduced milkTIA which has seen widespread adoption to become the leading LST for TIA. Building on this success, MilkyWay is now entering Phase 2: a multi-asset, multi-chain modular restaking protocol.\n\nMilkyWay’s architecture is purpose-built for modularity . Unlike traditional solutions, its modular design allows Actively Validated Services (AVSs) to fully customize, or “Plug-in” their security solutions through programmable rules, including asset delegation and slashing mechanisms. By restaking native and liquid staked assets, users can provide security to AVSs or any off-chain program and system that require its own unique validation process for verification. This approach ensures seamless integration while minimizing operational complexity.\n\nThrough programmable rules, AVSs can define asset allocation and stake distribution, offering both operator-centric and AVS-centric models for greater control. Slashing rules further enhance security through customizable mechanisms like stake slash, jail slash, and burn slash, enabling AVSs to align these features with their risk profiles. These extensible features ensure MilkyWay evolves alongside the needs of its AVS partners, redefining staking and restaking with a focus on trust, innovation, and modularity.',
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.milkyway.zone/',
        provider: 'MilkyWay Labs'
      }],
    rest: [{
        address: 'https://lcd.mainnet.milkyway.zone/',
        provider: 'MilkyWay Labs'
      }],
    grpc: [{
        address: 'grpc.mainnet.milkyway.zone',
        provider: 'MilkyWay Labs'
      }]
  },
  explorers: [],
  keywords: ['liquid staking', 'restaking']
};
export default info;