import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'chihuahua',
  assets: [
    {
      description: 'The native token of Chihuahua Chain',
      denomUnits: [{
          denom: 'uhuahua',
          exponent: 0
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'uhuahua',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingeckoId: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }]
    },
    {
      description: 'Puppy',
      denomUnits: [{
          denom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
          exponent: 0
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      base: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      }
    },
    {
      description: 'has a hat',
      denomUnits: [{
          denom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
          exponent: 0
        }, {
          denom: 'achihuahuawifhat',
          exponent: 6
        }],
      base: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
        }]
    },
    {
      description: 'Woof',
      denomUnits: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
          exponent: 0
        }, {
          denom: 'WOOF',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
        }]
    },
    {
      description: 'Tacos',
      denomUnits: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
          exponent: 0
        }, {
          denom: 'TACOS',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
      name: 'TACOS',
      display: 'TACOS',
      symbol: 'TACOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png'
        }]
    },
    {
      description: 'Weed',
      denomUnits: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
          exponent: 0
        }, {
          denom: 'WEED',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
      name: 'WEED',
      display: 'WEED',
      symbol: 'WEED',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png'
        }]
    },
    {
      description: 'Bulldog',
      denomUnits: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
          exponent: 0
        }, {
          denom: 'BDOG',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
      name: 'BDOG',
      display: 'BDOG',
      symbol: 'BDOG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png'
        }]
    },
    {
      description: 'CaneCorso',
      denomUnits: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
          exponent: 0
        }, {
          denom: 'CORSO',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
      name: 'CORSO',
      display: 'CORSO',
      symbol: 'CORSO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png'
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked HUAHUA',
      denomUnits: [{
          denom: 'cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
          exponent: 0
        }, {
          denom: 'bHUAHUA',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      base: 'cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      name: 'BackBone Labs Liquid Staked HUAHUA',
      display: 'bHUAHUA',
      symbol: 'bHUAHUA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
      },
      coingeckoId: 'backbone-labs-staked-huahua'
    }
  ]
};
export default info;