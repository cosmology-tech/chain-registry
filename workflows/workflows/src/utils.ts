import { toCamelCase, toPascalCase } from 'schema-typescript';

export const camelCase = (str: string) => {
  if (str === 'IBCData') {
    return 'ibcData';
  }
  return toCamelCase(str);
};

export const pascalCase = (str: string) => {
  return toPascalCase(str);
};