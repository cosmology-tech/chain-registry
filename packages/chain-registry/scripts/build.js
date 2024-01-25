const fs = require("fs");
const deepmerge = require("deepmerge");
const glob = require("glob").sync;
const path = require("path");

const NON_INFO_DIRS = ["_memo_keys", "_scripts", "_template", ".github"];

const paths = glob(`${__dirname}/../chain-registry/**/*.json`).filter((a) => {
  let dir = a.split("chain-registry/chain-registry")[1];
  dir = path.basename(path.dirname(dir));
  return !NON_INFO_DIRS.includes(dir);
});

const assets = [];
const chains = [];
const ibcs = [];
paths.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  if (!data.$schema) {
    console.warn("problematic data:");
    console.log(data);
    return;
  }
  if (data.$schema.endsWith("assetlist.schema.json")) assets.push(data);
  if (data.$schema.endsWith("chain.schema.json")) chains.push(data);
  if (data.$schema.endsWith("ibc_data.schema.json")) ibcs.push(data);
});

chains.forEach((chain) => {
  if (!chain.slip44) chain.slip44 = 118;

  if (chain.codebase) {
    chain.codebase = {
      cosmos_sdk_version: chain.codebase.cosmos_sdk_version,
      cosmwasm_enabled: chain.codebase.cosmwasm_enabled,
      cosmwasm_version: chain.codebase.cosmwasm_version,
    };
  }

  delete chain.peers;
});

const write = (file, json, TypeName, isArray = false) => {
  const strfy = JSON.stringify(json, null, 2);
  const exportType = isArray ? TypeName + "[]" : TypeName;
  fs.writeFileSync(
    `${__dirname}/../src/${file}.ts`,
    `import { ${TypeName} } from '@chain-registry/types';
const ${file}: ${exportType} = ${strfy};
export default ${file};
    `
  );
};

write(`assets`, assets, "AssetList", true);
write(`chains`, chains, "Chain", true);
write(`ibc`, ibcs, "IBCInfo", true);
