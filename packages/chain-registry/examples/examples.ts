// import single chain from folder, good for tree shaking
import { chain as chain_akash } from '../src/mainnet/akash';

console.log(chain_akash.apis);

// backward compatibility by default: get all chains at once:
import { chains } from '../src';

console.log(chains.find((chain) => chain.chain_name === 'akash'));

// made bundle smaller: get all chains only in mainnet:
import { chains as chains_main } from '../src/mainnet';

console.log(chains_main.find((chain) => chain.chain_name === 'akash'));

// infer types thanks to `satisfies` operator
import { chain as chain_cosmoshub } from '../src/mainnet/cosmoshub';
import { chain as chain_osmosis } from '../src/mainnet/osmosis';

const supportedChains = [
  chain_osmosis,
  chain_cosmoshub,
];

export type Chains = typeof supportedChains[number]['chain_name']
//          ^ output: "osmosis" | "cosmoshub"

// made bundle even smaller: get all chains only in mainnet
// and with minimal info customized for dropbox:
// TODO:: gen minimal arrays of mainnet and testnet and both
