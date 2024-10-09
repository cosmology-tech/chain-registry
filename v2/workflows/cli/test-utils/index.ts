export * from './mocks';

import { join } from 'path';

export const getRegistryFixtureDir = () => {
  return join('../../../', 'repos/chain-registry-fixtures');
};