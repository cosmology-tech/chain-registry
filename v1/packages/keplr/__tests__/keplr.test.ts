import { chainRegistryChainToKeplr } from '../src/';
import { assets, chains } from '../test-utils';

it('keplr', () => {
  const chain = chains.find((chain) => chain.chain_name === 'osmosis')!;
  const config = chainRegistryChainToKeplr(chain, assets);
  expect(config).toMatchSnapshot();
});

it('getExplorer', () => {
  const chain = chains.find((chain) => chain.chain_name === 'osmosis')!;
  const address = chain.apis!.rest![1]!.address!;

  const config = chainRegistryChainToKeplr(chain, assets, {
    getExplorer: () => 'https://myexplorer.com',
    getRestEndpoint: (_chain) => address
  });
  expect(config).toMatchSnapshot();
});
