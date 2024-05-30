import { toCamelCase, toPascalCase } from "schema-typescript";
import { Registry } from './registry';
import { join } from "path";

export const camelCase = (str: string) => {
  if (str === 'IBCData') {
    return 'ibcData';
  }
  return toCamelCase(str);
};

export const pascalCase = (str: string) => {
  return toPascalCase(str);
}

export const getFixturesRegistry = () => {
  const registry = new Registry(
    join(__dirname, '/../../../repos/fixtures')
  );
  return registry;
};
