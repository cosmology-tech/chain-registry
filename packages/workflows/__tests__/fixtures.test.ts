import { fs, path } from 'file-ts';

import { mkdirpSync, globSync } from '../test-utils';

import { chains, assetLists, ibcInfo, schemas } from '../src';


xit('injector', () => {
  mkdirpSync('/some/fake/dir/');
  fs.writeFileSync('/some/fake/dir/file.txt', 'somecontent');
  console.log(`Reading from path: ${path.dirname('/some/fake/dir/file.txt')}`);
  const content = fs.readFileSync('/some/fake/dir/file.txt');
  console.log(`Content: ${content}`);
  const files = globSync('/', '*')
  expect(files).toMatchSnapshot();
})

it('numChains', () => {
  expect(chains.length).toMatchSnapshot();
  expect(chains).toMatchSnapshot();
})

it('numIBC', () => {
  expect(ibcInfo.length).toMatchSnapshot();
  expect(ibcInfo).toMatchSnapshot();
})

it('numAssets', () => {
  expect(assetLists.length).toMatchSnapshot();
  expect(assetLists).toMatchSnapshot();
})

it('numSchemas', () => {
  expect(schemas.length).toMatchSnapshot();
  console.log(schemas);
})