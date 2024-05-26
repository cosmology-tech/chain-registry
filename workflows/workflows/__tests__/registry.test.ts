import { SchemaValidator } from '../src/validator';
import { getRegistry } from '../test-utils';

const registry = getRegistry();

it('registry', () => {
  expect(registry.count).toMatchSnapshot();
});

it('validator', () => {

  const validator = new SchemaValidator(
    registry
  );
  
  validator.validateAllData();
  
});

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
  
});

it('validator strict 2020 draft', () => {

  const validator = new SchemaValidator(
    registry,
    {
      draft: '2020-12',
      allErrors: true,
      useStrict: true
    }
  );
  
  expect(() => {
    validator.validateAllData();
  }).toThrow();
  
});

it('validator strict 2019 draft', () => {

  const validator = new SchemaValidator(
    registry,
    {
      draft: '2019-09',
      allErrors: true,
      useStrict: true
    }
  );
  
  expect(() => {
    validator.validateAllData();
  }).toThrow();
  
});

it('validator strict draft-07', () => {

  const validator = new SchemaValidator(
    registry,
    {
      draft: 'draft-07',
      allErrors: true,
      useStrict: true
    }
  );
  
  expect(() => {
    validator.validateAllData();
  }).toThrow();
  
  // expect(validator.validateAllData()).rejects.toThrow('strict mode: required property "address" is not defined at "https://osmosis.zone/assetlists.schema.json#/then" (strictRequired)');

});