import { join, resolve } from "path";

import { RegistryFixture } from "../src/registry";

export const getRegistry = () => {
  const registry = new RegistryFixture(
    join(__dirname, '/../../../packages/chain-registry/chain-registry')
  );
  return registry;
}

export const fixtureOutputDir = resolve(__dirname +'/../../../__output__/');
