import { Chain } from '@chain-registry/types';
import { assets, chains } from '../test-utils';

import { chainRegistryChainToCosmostation } from '../src/';

const testChainData = async (chainName: string, chainId: string) => {
  const chainRegChain: Chain = chains.find(
    ({ chain_name }) => chain_name === chainName
  )!;
  const cosmostationData = chainRegistryChainToCosmostation(
    chainRegChain,
    assets
    // {
    //     getRestEndpoint: (chain) => preferredChainInfo[chain.chain_name].rest,
    // }
  );
  expect(cosmostationData).toMatchSnapshot();
};

it('osmosis', async () => {
  const chainName = 'osmosis';
  const chainId = 'osmosis-1';
  await testChainData(chainName, chainId);
});

it('gravity', async () => {
  const chainName = 'gravitybridge';
  const chainId = 'gravity-bridge-3';
  await testChainData(chainName, chainId);
});

it('persistence', async () => {
  const chainName = 'persistence';
  const chainId = 'core-1';
  await testChainData(chainName, chainId);
});

it('kava', async () => {
  const chainName = 'kava';
  const chainId = 'kava_2222-10';
  await testChainData(chainName, chainId);
});
