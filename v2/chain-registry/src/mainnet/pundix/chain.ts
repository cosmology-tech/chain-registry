import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'pundix',
  chainId: 'PUNDIX',
  website: 'https://pundix.com',
  prettyName: 'Pundi X Chain',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'px',
  daemonName: 'pundixd',
  nodeHome: '$HOME/.pundix',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
        fixedMinGasPrice: 2000000000000,
        lowGasPrice: 2000000000000,
        averageGasPrice: 2500000000000,
        highGasPrice: 3000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.45.11'
  },
  description: 'Pundi X Chain is a dedicated payment-focused blockchain in the Function X network. It is specially designed to perform high throughput transactions with low latency and low transaction fees. In addition, it provides room for future compliance requirement upgrades, hardware (XPOS) integration, and Point-of-Sales compatibility, with tokenonomics that offer incentives to merchants and payment processors.',
  apis: {
    rpc: [{
        address: 'https://px-json.pundix.com',
        provider: 'Pundi X'
      }, {
        address: 'https://pundix.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }],
    rest: [{
        address: 'https://px-rest.pundix.com',
        provider: 'Pundi X'
      }, {
        address: 'https://pundix.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }],
    grpc: [{
        address: 'https://px-grpc.pundix.com',
        provider: 'Pundi X'
      }, {
        address: 'https://pundix.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.svg'
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.svg'
  },
  explorers: [{
      kind: 'starscan',
      url: 'https://starscan.io',
      txPage: 'https://starscan.io/pundix/tx/${txHash}',
      accountPage: 'https://starscan.io/pundix/address/${accountAddress}'
    }, {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/pundix/',
      txPage: 'https://explorer.nodeshub.online/pundix/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/pundix/accounts/${accountAddress}'
    }]
};
export default info;