export * from './mainnet/named';
export * from './testnet/named';
export * from './devnet/named';
export * from './noncosmos/named';
import all from './index';

export default all;

const { assets, chains, ibc } = all;

export { assets, chains, ibc };