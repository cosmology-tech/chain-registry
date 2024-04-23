
import { sync as globSync } from 'glob';
import { resolve } from 'path';

import { schemas } from '../src';
import { SchemaTypeGenerator } from '../src';

const outputDir = resolve(__dirname +'/../../../__output__/base-types');

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
    schemas,
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