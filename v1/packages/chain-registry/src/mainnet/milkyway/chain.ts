import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'milkyway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://milkyway.zone/',
  pretty_name: 'MilkyWay',
  chain_type: 'cosmos',
  chain_id: 'milkyway',
  bech32_prefix: 'milk',
  daemon_name: 'milkywayd',
  node_home: '$HOME/.milkywayd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035
      },
      {
        denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035
      },
      {
        denom: 'ibc/8D4FC51F696E03711B9B37A5787FB89BD2DDBAF788813478B002D552A12F9157',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035
      },
      {
        denom: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'umilk'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {

  },
  images: [{
      image_sync: {
        chain_name: 'milkyway',
        base_denom: 'umilk'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.svg',
      theme: {
        primary_color_hex: '#9182FD'
      }
    }],
  logo_URIs: {
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