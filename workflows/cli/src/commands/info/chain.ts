import { Chain } from '@chain-registry/interfaces';
import chalk from 'chalk';

export function displayChain(chain: Chain): void {
  console.log(chalk.bold.green(`Chain Details: ${chain.chain_name}`));
  console.log(chalk.bold(`Chain ID: ${chalk.cyan(chain.chain_id)}`));
  if (chain.pretty_name) {
    console.log(chalk.bold(`Pretty Name: ${chalk.cyan(chain.pretty_name)}`));
  }
  if (chain.website) {
    console.log(chalk.bold(`Website: ${chalk.underline.blue(chain.website)}`));
  }
  if (chain.status) {
    console.log(chalk.bold(`Status: ${chalk.yellow(chain.status)}`));
  }
  if (chain.network_type) {
    console.log(chalk.bold(`Network Type: ${chalk.magenta(chain.network_type)}`));
  }
  console.log(chalk.bold(`Bech32 Prefix: ${chalk.cyan(chain.bech32_prefix)}`));

  if (chain.daemon_name) {
    console.log(chalk.bold(`Daemon Name: ${chain.daemon_name}`));
  }

  if (chain.codebase) {
    console.log(chalk.bold(`Codebase:`));
    console.log(`  Git Repo: ${chain.codebase.git_repo}`);
    console.log(`  Recommended Version: ${chain.codebase.recommended_version}`);
  }

  if (chain.fees) {
    console.log(chalk.bold(`Fee Tokens:`));
    chain.fees.fee_tokens.forEach(fee => {
      console.log(`  Denom: ${fee.denom}, Fixed Min Gas Price: ${fee.fixed_min_gas_price}`);
    });
  }

  if (chain.staking) {
    console.log(chalk.bold(`Staking Tokens:`));
    chain.staking.staking_tokens.forEach(token => {
      console.log(`  Denom: ${token.denom}`);
    });
  }

  if (chain.apis) {
    console.log(chalk.bold(`APIs:`));
    if (chain.apis.rpc) {
      console.log(`  RPC:`);
      chain.apis.rpc.forEach(endpoint => {
        console.log(`    Address: ${endpoint.address}`);
      });
    }
    if (chain.apis.rest) {
      console.log(`  REST:`);
      chain.apis.rest.forEach(endpoint => {
        console.log(`    Address: ${endpoint.address}`);
      });
    }
  }

  if (chain.explorers) {
    console.log(chalk.bold(`Explorers:`));
    chain.explorers.forEach(explorer => {
      console.log(`  URL: ${explorer.url}`);
      if (explorer.tx_page) {
        console.log(`    TX Page: ${explorer.tx_page}`);
      }
      if (explorer.account_page) {
        console.log(`    Account Page: ${explorer.account_page}`);
      }
    });
  }

  console.log(chalk.bold(`Keywords: ${chain.keywords?.join(', ')}`));
}
