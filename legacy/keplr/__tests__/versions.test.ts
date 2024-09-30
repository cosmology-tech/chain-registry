import { extractVersion } from '../src';

const versions = [
  '0.47.20',
  '0.47.20-titan.3',
  'axelarnetwork/cosmos-sdk v0.47.20-0.20230904150332-37fb903a6c62',
  'celestiaorg/cosmos-sdk v0.47.20-sdk-v1.2.3',
  'cheqd/cosmos-sdk v0.47.20-cheqd-tag',
  'cheqd/cosmos-sdk v0.47.20-height-mismatch',
  'cosmos/cosmos-sdk v0.47.20',
  'desmos-labs/cosmos-sdk v0.47.20-desmos',
  'dydxprotocol/cosmos-sdk v0.47.20-0.20231011192538-b95c66dedbd5',
  'evmos/cosmos-sdk v0.47.20-evmos.2',
  'evmos/cosmos-sdk v0.47.20-evmos',
  'github.com/Finschia/finschia-sdk@v0.47.20',
  'github.com/wormhole-foundation/cosmos-sdk@v0.47.20-wormhole-2',
  'neutron-org/cosmos-sdk v0.47.20-neutron',
  'nolus-protocol/cosmos-sdk v0.47.20-nolus',
  'onomyprotocol/onomy-sdk v0.47.20-0.20221103153534-77ffa1c3fab2',
  'onomyprotocol/onomy-sdk v0.47.20-onomy-dev',
  'osmosis-labs/cosmos-sdk v0.47.20-v25-osmo-1',
  'osmosis-labs/cosmos-sdk v0.47.20',
  'persistenceOne/cosmos-sdk v0.47.20-lsm-rc0',
  'persistenceOne/cosmos-sdk v0.47.20-lsm5',
  'rust-ninja/cosmos-sdk v0.47.20-patch-validators-trim-tag',
  'sei-cosmos v0.47.20',
  'sge-network/cosmos-sdk v0.47.20-0.20240223100624-2a2661276cb4',
  'Stride-Labs/cosmos-sdk v0.47.20-stride-distribution-fix-0',
  'terra-money/cosmos-sdk v0.47.20-terra.0',
  'ununifi/cosmos-sdk v0.47.20-custom-bank-1',
  'v0.47.20',
  'v0.47.20-ics',
  'v0.47.20-ics-lsm',
  'v0.47.20-0.20220523154235-2921a1c3c918',
  'v0.47.20-ledger.3',
  'v0.47.20-0.20231114190313-b9164dd660b6',
  'v0.47.20-ledger',
  'v0.47.20-bank-rc2',
  'v0.47.20-0.20240417094812-f556fd956fb1',
  'v0.47.20-ics-lsm',
  'v0.47.20-evmos.2',
  'xpladev/cosmos-sdk v0.47.20-xpla',
];

describe('extractVersion', () => {
  it('parse all sorts of versions', () => {
    for (let version of versions) {
      expect(extractVersion(version)).toEqual('0.47.20');
    }
  });
  it('should extract the version number when input matches the expected format', () => {
    expect(extractVersion('0.47')).toEqual('0.47.0');
    expect(extractVersion('github.com/lavanet/cosmos-sdk@v0.47.x-lava')).toEqual('0.47.0');
    expect(extractVersion('service/api v1.2.3-beta')).toEqual('1.2.3');
    expect(extractVersion('product/module v10.0.1-alpha')).toEqual('10.0.1');
    expect(extractVersion('serviceapi v1.2.3')).toEqual('1.2.3');
    expect(extractVersion('service/api/1.2.3')).toEqual('1.2.3');
    expect(extractVersion('123')).toEqual('123.0.0');
  });

  it('should return null for empty or undefined inputs', () => {
    expect(extractVersion('')).toBeNull();
    // @ts-ignore
    expect(extractVersion(null)).toBeNull();
    // @ts-ignore
    expect(extractVersion(undefined)).toBeNull();
  });

  it('should handle edge cases with version extraction', () => {
    expect(extractVersion('name/endpoint v0.0.0-xyz')).toEqual('0.0.0');
    expect(extractVersion('another/try v999.999.999-final')).toEqual('999.999.999');
  });
});
