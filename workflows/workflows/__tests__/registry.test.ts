import { join } from "path";

import { RegistryFixture } from "../src/registry";
import { SchemaValidator } from "../src/validator";

const registry = new RegistryFixture(
  join(__dirname, '/../../../packages/chain-registry/chain-registry')
);

it('registry', () => {
  expect(registry.count).toMatchSnapshot();
})

it('validator', () => {

  const validator = new SchemaValidator(
    registry
  );
  
  validator.validateData();
  
})