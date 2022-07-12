import ibc from '../__fixtures__/ibc.json';
import assets from '../__fixtures__/assets.json';
import { getIbcAssets, getIbcDenom, getIbcDenomByBase, getTransferChannel } from '../src';

// TODO
// create ibc_assets object
// superset of assets

it('getIbcAssets', () => {
    const chainName = 'osmosis';
    const list = getIbcAssets(
        chainName,
        ibc,
        assets
    );
    expect(list).toMatchSnapshot();
});