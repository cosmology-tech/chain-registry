import { getRegistry } from '../test-utils';

const registry = getRegistry();

it('registry', () => {
  registry.validateUnique()
});
