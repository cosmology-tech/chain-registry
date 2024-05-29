import generate from '@babel/generator';

import { createTypedVariableDeclaration, createVariableAssignment, JsonObject } from '../src';
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
  const ast = createTypedVariableDeclaration('assets', 'AssetList', jsonData);
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