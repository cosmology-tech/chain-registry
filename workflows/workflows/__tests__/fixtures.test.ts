import { assetLists, chains, ibcInfo, schemas } from '../src';

it('numChains', () => {
  expect(chains.length).toMatchSnapshot();
  // expect(chains).toMatchSnapshot();
})

it('numIBC', () => {
  expect(ibcInfo.length).toMatchSnapshot();
  // expect(ibcInfo).toMatchSnapshot();
})

it('numAssets', () => {
  expect(assetLists.length).toMatchSnapshot();
  // expect(assetLists).toMatchSnapshot();
})

it('numSchemas', () => {
  expect(schemas.length).toMatchSnapshot();
  // expect(schemas).toMatchSnapshot();
})