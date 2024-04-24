import { join, resolve } from "path";

import { Registry } from "../src/registry";

export const getRegistry = () => {
  const registry = new Registry(
    join(__dirname, '/../../../packages/chain-registry/chain-registry')
  );
  return registry;
}

export const fixtureOutputDir = resolve(__dirname +'/../../../__output__/');
