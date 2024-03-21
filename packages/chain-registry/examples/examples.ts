// import single chain from root, good for tree shaking
import { akash, akashtestnet } from '../src';

console.log(akash.apis, akashtestnet.apis);

// backward compatibility using "all.ts": get all chains at once:
import { chains as all_chains } from '../src/all';

console.log(all_chains.find((chain) => chain.chain_name === 'akash'));

// backward compatibility by default: get all chains at once:
import { chains } from '../src';

console.log(chains.find((chain) => chain.chain_name === 'akash'));

// made bundle smaller: get all chains only in mainnet:
import { chains as chains_main } from '../src/mainnet/chains';

console.log(chains_main.find((chain) => chain.chain_name === 'akash'));

// made bundle even smaller: get all chains only in mainnet
// and with minimal info customized for dropbox:
// TODO:: gen minimal arrays of mainnet and testnet and both
