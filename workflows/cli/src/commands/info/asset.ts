import { Asset } from '@chain-registry/interfaces';
import chalk from 'chalk';

export function displayAsset(asset: Asset): void {
  console.log(chalk.bold.blue(`Asset Name: ${asset.name}`));
  console.log(chalk.bold(`Symbol: ${asset.symbol}`));
  console.log(chalk.bold(`Type: ${asset.type_asset || 'Not specified'}`));
  console.log(`Base Unit: ${asset.base}`);
  console.log(`Display Unit: ${asset.display}`);
  if (asset.deprecated) {
    console.log(chalk.red('Deprecated: Yes'));
  }
  if (asset.description) {
    console.log(chalk.italic(`Description: ${asset.description}`));
  }
  if (asset.extended_description) {
    console.log(chalk.italic(`Extended Description: ${asset.extended_description}`));
  }
  if (asset.denom_units) {
    console.log(chalk.bold.green('Denomination Units:'));
    asset.denom_units.forEach(unit => {
      console.log(`  - Denom: ${unit.denom}, Exponent: ${unit.exponent}${unit.aliases ? `, Aliases: ${unit.aliases.join(', ')}` : ''}`);
    });
  }
  if (asset.ibc) {
    console.log(chalk.bold.yellow('IBC Info:'));
    console.log(`  Source Channel: ${asset.ibc.source_channel}`);
    console.log(`  Destination Channel: ${asset.ibc.dst_channel}`);
    console.log(`  Source Denom: ${asset.ibc.source_denom}`);
  }
  if (asset.logo_URIs) {
    console.log(chalk.bold.cyan('Logos:'));
    asset.logo_URIs.png && console.log(`  PNG: ${asset.logo_URIs.png}`);
    asset.logo_URIs.svg && console.log(`  SVG: ${asset.logo_URIs.svg}`);
  }
  if (asset.images && asset.images.length > 0) {
    console.log(chalk.bold.magenta('Images:'));
    asset.images.forEach((image, index) => {
      console.log(`  Image ${index + 1}:`);
      image.png && console.log(`    PNG: ${image.png}`);
      image.svg && console.log(`    SVG: ${image.svg}`);
      if (image.theme) {
        console.log(`    Theme: ${image.theme.primary_color_hex} Circle: ${image.theme.circle ? 'Yes' : 'No'} Dark Mode: ${image.theme.dark_mode ? 'Yes' : 'No'}`);
      }
    });
  }
  if (asset.socials) {
    console.log(chalk.bold('Socials:'));
    asset.socials.website && console.log(`  Website: ${asset.socials.website}`);
    asset.socials.twitter && console.log(`  Twitter: ${asset.socials.twitter}`);
  }
  console.log('\n');
}