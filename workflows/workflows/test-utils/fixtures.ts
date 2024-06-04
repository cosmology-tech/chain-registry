import { join, resolve } from 'path';

import { Registry } from '../src/registry';

export type RegistryType = 'original' | 'minimal' | 'full'

export const getRegistry = (registryType: RegistryType = 'original') => {
  const registry = new Registry(
    join(__dirname, `/../../../repos/fixtures/registries/${registryType}`)
  );
  return registry;
};

export const fixtureOutputDir = resolve(__dirname + '/../../../__output__/');
