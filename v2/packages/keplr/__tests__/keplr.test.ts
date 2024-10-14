import { chainRegistryChainToKeplr } from '../src/';
import { chains, assetLists } from '@chain-registry/v2'

it('keplr', () => {
  const chain = chains.find((chain) => chain.chainName === 'osmosis')!;
  const config = chainRegistryChainToKeplr(chain, assetLists);
  expect(config).toMatchSnapshot();
});

it('getExplorer', () => {
  const chain = chains.find((chain) => chain.chainName === 'osmosis')!;
  const address = chain.apis!.rest![1]!.address!;

  const config = chainRegistryChainToKeplr(chain, assetLists, {
    getExplorer: () => 'https://myexplorer.com',
    getRestEndpoint: (_chain) => address
  });
  expect(config).toMatchSnapshot();
});
