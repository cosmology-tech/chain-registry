import { join } from "path";

import { RegistryFixture } from "../src/registry";

it('registry', () => {

  const registry = new RegistryFixture(
    join(__dirname, '/../../../packages/chain-registry/chain-registry')
  );
  
  expect(registry.count).toMatchSnapshot();
  
})