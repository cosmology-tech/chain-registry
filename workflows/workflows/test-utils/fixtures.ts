import { join, resolve } from 'path';

import { Registry } from '../src/registry';

export const getRegistry = () => {
  const registry = new Registry(
    join(__dirname, '/../../../repos/fixtures')
  );
  return registry;
};

export const fixtureOutputDir = resolve(__dirname + '/../../../__output__/');
