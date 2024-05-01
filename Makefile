.PHONY: def use-cosmos use-fixtures

def: use-cosmos

use-cosmos:
	@echo "Switching submodule to use cosmos/chain-registry"
	git config submodule.packages/chain-registry/chain-registry.url https://github.com/cosmos/chain-registry
	git submodule sync packages/chain-registry/chain-registry
	git submodule update --init --remote packages/chain-registry/chain-registry
	@echo "Submodule is now using cosmos/chain-registry"

use-fixtures:
	@echo "Switching submodule to use cosmology-tech/chain-registry-fixtures"
	git config submodule.packages/chain-registry/chain-registry.url https://github.com/cosmology-tech/chain-registry-fixtures
	git submodule sync packages/chain-registry/chain-registry
	git submodule update --init --remote packages/chain-registry/chain-registry
	@echo "Submodule is now using cosmology-tech/chain-registry-fixtures"
