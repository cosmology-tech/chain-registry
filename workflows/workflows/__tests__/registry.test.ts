import { join } from "path";

import { Registry } from "../src/registry";
import { SchemaValidator } from "../src/validator";

const registry = new Registry(
  join(__dirname, '/../../../packages/chain-registry/chain-registry-fixtures')
);

it('registry', () => {
  expect(registry.count).toMatchSnapshot();
})

it('validator', () => {

  const validator = new SchemaValidator(
    registry
  );
  
  validator.validateAllData();
  
})

it('validator strict', () => {

  const validator = new SchemaValidator(
    registry,
    {
      allErrors: true,
      useStrict: true
    }
  );
  
  expect(() => {
    validator.validateAllData();
  }).toThrow();
  
})