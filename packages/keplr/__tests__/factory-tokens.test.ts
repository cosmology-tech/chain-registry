import { chainRegistryChainToKeplr } from '@chain-registry/keplr';
import { AssetList, Chain } from '@chain-registry/types';
import { ChainInfo } from '@keplr-wallet/types';

const chain: Chain = {
  chain_name: 'PRYZM_CHAIN_NAME',
  chain_id: 'PRYZM_CHAIN_ID',
  status: 'development',
  network_type: 'testnet',
  pretty_name: 'Pryzm Testnet',
  bech32_prefix: 'pryzm',
  slip44: 118,
  staking: {
    staking_tokens: [
      {
        denom: 'upryzm'
      }
    ]
  },
  fees: {
    fee_tokens: [
      {
        denom: 'upryzm',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.01
      },
      {
        denom: 'factory/pryzm15k9s9p0ar0cx27nayrgk6vmhyec3lj7vkry7rx/uusdsim',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.01
      }
    ]
  }
};

const assets: AssetList = {
  chain_name: 'PRYZM_CHAIN_NAME',
  assets: [
    {
      description: 'Pryzm token',
      denom_units: [
        {
          denom: 'upryzm',
          exponent: 0
        },
        {
          denom: 'pryzm',
          exponent: 6
        }
      ],
      base: 'upryzm',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/prism/images/prism-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/prism/images/prism-token.svg'
      },
      coingecko_id: 'pryzm'
    }
  ]
};

const config: ChainInfo = chainRegistryChainToKeplr(chain, [assets]);

it('config', () => {
  //   console.log(config);
  expect(config).toMatchSnapshot();
});
