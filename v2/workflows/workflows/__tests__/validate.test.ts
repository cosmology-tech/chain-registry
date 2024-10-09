import { SchemaValidator } from '../src/validator';
import { getRegistry } from '../test-utils';

const registry = getRegistry();

it('validator 2020 draft', () => {

  const validator = new SchemaValidator(
    registry,
    {
      draft: '2020-12',
      allErrors: true,
      useStrict: false
    }
  );

  validator.validateAllData();

});

it('validator 2019 draft', () => {

  const validator = new SchemaValidator(
    registry,
    {
      draft: '2019-09',
      allErrors: true,
      useStrict: false
    }
  );

  validator.validateAllData();
});

it('validator draft-07', () => {

  const validator = new SchemaValidator(
    registry,
    {
      draft: 'draft-07',
      allErrors: true,
      useStrict: false
    }
  );

  validator.validateAllData();
});