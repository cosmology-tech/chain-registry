import { assetLists, chains } from '@chain-registry/v2'

import { chainRegistryChainToCosmostation } from '../src';

it('keplr', () => {
  const chain = chains.find((chain) => chain.chainName === 'osmosis')!;
  const config = chainRegistryChainToCosmostation(chain, assetLists);
  expect(config).toMatchSnapshot();
});

it('getExplorer', () => {
  const chain = chains.find((chain) => chain.chainName === 'osmosis')!;
  const address = chain.apis!.rest![1]!.address!;
  const config = chainRegistryChainToCosmostation(chain, assetLists, {
    getRestEndpoint: (_chain) => address
  });
  expect(config).toMatchSnapshot();
});
