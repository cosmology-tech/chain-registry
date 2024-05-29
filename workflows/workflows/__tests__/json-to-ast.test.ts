import generate from '@babel/generator';
import * as t from '@babel/types';

import { createAliasedImportDeclaration, createExportAllDeclarations, createExportedArrayDeclaration, createImportDeclaration, createImportsAndExportsAtRootForIndex, createTypedVariableDeclaration, createVariableAssignment, generateImportExportsAtRoot, generateImportsAndExport, JsonObject } from '../src';
const jsonData: JsonObject = {
  $schema: '../assetlist.schema.json',
  chainName: '8ball',
  assets: [
    {
      description: 'The native staking token of 8ball.',
      denomUnits: [
        { denom: 'uebl', exponent: 0 },
        { denom: 'ebl', exponent: 6 }
      ],
      base: 'uebl',
      name: '8ball',
      display: 'ebl',
      'some/property': 'goes-here',
      _prop: 'goes-here',
      symbol: 'EBL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      coingeckoId: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }
      ]
    }
  ]
};

it('json-to-ast var declaration', () => {
  const ast = createTypedVariableDeclaration('assetList', 'AssetList', jsonData);
  const code = generate(ast).code;
  expect(code).toMatchSnapshot();
});

it('should generate correct ast for JSON and evaluate it', () => {
  const ast = createVariableAssignment('assets', jsonData);
  const code = generate(ast).code;
  let assets;
  eval(code);
  expect(assets).toEqual(jsonData);
});


it('createImportDeclaration', () => {
  const ast = createImportDeclaration(['AssetList', 'Chain'], '@chain-registry/types');
  const code = generate(ast).code;
  expect(code).toMatchSnapshot();
});

it('createAliasedImportDeclaration', () => {
  const ast = createAliasedImportDeclaration('assetList', '_mychain', 'mychain');
  const code = generate(ast).code;
  expect(code).toMatchSnapshot();
});

it('createExportedArrayDeclaration', () => {
  const ast = createExportedArrayDeclaration('assetLists', 'AssetList', ['_bitcannadev1', '_celestiadevnet2', '_interwebdevnet']);
  const code = generate(ast).code;
  expect(code).toMatchSnapshot();
});

it('generateImportsAndExport', () => {
  const [imports, exports] = generateImportsAndExport([
    {
      source: './asset-lists',
      specifier: 'assetLists'
    },
    {
      source: './chains',
      specifier: 'chains'
    }
  ]);
  const code = generate(t.program([
    ...imports,
    exports
  ])).code;
  expect(code).toMatchSnapshot();
});

it('createExportAllDeclarations', () => {
  const imports = createExportAllDeclarations([
    './asset-lists',
    './chains',
    './ibc-data'
  ]);
  const code = generate(t.program([
    ...imports
  ])).code;
  expect(code).toMatchSnapshot();
});

it('generateImportExportsAtRoot', () => {
  const imports = generateImportExportsAtRoot('ibcData', [
    {
      alias: '_mainnet',
      source: './mainnet'
    },
    {
      alias: '_noncosmos',
      source: './noncosmos'
    },
    {
      alias: '_testnets',
      source: './testnets'
    }
  ], 'ibcData', 'IBCData');
  const code = generate(t.program([
    ...imports
  ])).code;
  expect(code).toMatchSnapshot();
});

it('createImportsAndExportsAtRootForIndex', () => {
  const imports = createImportsAndExportsAtRootForIndex([
    { specifier: 'assetLists', source: './asset-lists' },
    { specifier: 'chains', source: './chains' },
    { specifier: 'ibcData', source: './ibc-data' }
  ]);
  const code = generate(t.program([
    ...imports
  ])).code;
  expect(code).toMatchSnapshot();
});