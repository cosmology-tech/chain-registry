import { assets, ibc } from 'chain-registry';

import { getIbcAssetPath, getIbcDenomByBase, ibcDenom } from '../src';

it('AKT on osmosis', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'akash',
    //
    assets,
    'uakt'
  );
  expect(denom).toEqual(
    'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
  );
});

it('STARS on osmosis', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'stargaze',
    //
    assets,
    'ustars'
  );
  expect(denom).toEqual(
    'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4'
  );
});

it('JUNO on osmosis', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'juno',
    //
    assets,
    'ujuno'
  );
  expect(denom).toEqual(
    'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
  );
});

/*
******
******
******
fetch first IBCINFO FROM OSMOSIS<>PERSISTENCE
******
******
******


{
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-4"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-5"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-4",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-6",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  }  

******
******
******
next, get asset/trace for SAME asset ON persitence because "chain_name": "persistence"
******
******
******

NATIVE ASSET

LEADS US TO A TRACE ON pSTAKE asset:

         {
            "type": "ibc",
            "counterparty": {
              "chain_name": "gravitybridge",
              "base_denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
              "channel_id": "channel-24"
            },
            "chain": {
              "channel_id": "channel-38",
              "path": "transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
            }
          }

******
******
******
NOW GET THE persistence-gravity BRIDGE IBCINFO
******
******
******


  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-unknown',
      connection_id: 'connection-unknown'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-unknown',
      connection_id: 'connection-unknown'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-unknown',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  }

******
******
******
now check GRAVITYBRIDGE for pStake ASSET
******
******
******

(NOT FOUND, so you're done)

*/

// osmosisd q ibc-transfer denom-trace 8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961

// denom_trace:
//   base_denom: gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006
//   path: transfer/channel-4/transfer/channel-38

it('PSTAKE ibcDenom on osmosis', () => {
  const denom = ibcDenom(
    [
      {
        // THIS IS THE CHANNEL TO PERSISTENCE
        // ON OSMOSIS
        channel_id: 'channel-4',
        port_id: 'transfer'
      },
      {
        // THIS IS THE CHANNEL TO GRAVITYBRIDGE
        // ON PERSISTENCE
        channel_id: 'channel-38',
        port_id: 'transfer'
      }
    ],
    // why is this gravity?
    'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
  );
  expect(denom).toEqual(
    'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961'
  );
});

it('PSTAKE on osmosis', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'persistence',
    //
    assets,
    'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
    // 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
  );
  expect(denom).toEqual(
    'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961'
  );
});

it('PSTAKE path on osmosis', () => {
  const path = getIbcAssetPath(
    ibc,
    'osmosis',
    'persistence',
    //
    assets,
    'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
  );
  expect(path).toEqual([
    {
      // THIS IS THE CHANNEL TO PERSISTENCE
      // ON OSMOSIS
      channel_id: 'channel-4',
      port_id: 'transfer'
    },
    {
      // THIS IS THE CHANNEL TO GRAVITYBRIDGE
      // ON PERSISTENCE
      channel_id: 'channel-38',
      port_id: 'transfer'
    }
  ]);
});

it('AKASH path on osmosis', () => {
  const path = getIbcAssetPath(
    ibc,
    'osmosis',
    'akash',
    //
    assets,
    'uakt'
  );
  expect(path).toEqual([
    {
      // THIS IS THE CHANNEL TO AAKSH
      // ON OSMOSIS
      channel_id: 'channel-1',
      port_id: 'transfer'
    }
  ]);
});

it('OSMO on juno', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'juno',
    'osmosis',
    //
    assets,
    'uosmo'
  );
  expect(denom).toEqual(
    'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518'
  );
});
