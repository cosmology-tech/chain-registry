import { sync as globSync } from 'glob';
import { join } from 'path';

import { SchemaTypeGenerator } from '../src';
import { fixtureOutputDir, getRegistry } from '../test-utils';

const outputDir = join(fixtureOutputDir, 'camel');

const registry = getRegistry()

it('types', () => {
  const generator = new SchemaTypeGenerator({
    outputDir,
    supportedSchemas: [
        'chain.schema.json',
        'assetlist.schema.json',
        'ibc_data.schema.json',
        'versions.schema.json',
        'memo_keys.schema.json',
    ],
    registry,
    schemaTSOptions: {
        strictTypeSafety: true,
        useCamelCase: false,
        useSingleQuotes: true
    }
  });
  generator.generateTypes();

  const tsFiles = globSync(`${outputDir}/*.ts`).map(a=>a.split(outputDir)[1])
  expect(tsFiles).toMatchSnapshot();
  
});