// import single chain from folder, good for tree shaking
import { chain as chain_akash } from './mainnet/akash';

console.log(chain_akash.apis);

// import single chain from root, good for tree shaking
import { akash, akashtestnet } from '.';

console.log(akash.chain.apis, akashtestnet.chain.apis);

// backward compatibility using "all.ts": get all chains at once:
import { chains } from './all';

console.log(chains.find((chain) => chain.chain_name === 'akash'));

// made bundle smaller: get all chains only in mainnet:
import { chains as chains_main } from './mainnet/all';

console.log(chains_main.find((chain) => chain.chain_name === 'akash'));

// made bundle even smaller: get all chains only in mainnet
// and with minimal info customized for dropbox:
// TODO:: gen minimal arrays of mainnet and testnet and both
