import { assets, chains } from '../test-utils';

import { chainRegistryChainToCosmostation } from '../src';

it('keplr', () => {
  const chain = chains.find((chain) => chain.chain_name === 'osmosis')!;
  const config = chainRegistryChainToCosmostation(chain, assets);
  expect(config).toMatchSnapshot();
});

it('getExplorer', () => {
  const chain = chains.find((chain) => chain.chain_name === 'osmosis')!;
  const address = chain.apis!.rest![1]!.address!;
  const config = chainRegistryChainToCosmostation(chain, assets, {
    getRestEndpoint: (_chain) => address
  });
  expect(config).toMatchSnapshot();
});
