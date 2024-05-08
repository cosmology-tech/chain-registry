.PHONY: def update-cosmos update-fixtures

def: update-cosmos update-fixtures

update-cosmos:
	@echo "Updating cosmos/chain-registry submodule"
	git config submodule.packages/chain-registry/chain-registry.url https://github.com/cosmos/chain-registry
	git submodule sync packages/chain-registry/chain-registry
	git submodule update --init --remote packages/chain-registry/chain-registry
	@echo "cosmos/chain-registry submodule is updated"

update-fixtures:
	@echo "Updating cosmology-tech/chain-registry-fixtures submodule"
	git config submodule.packages/chain-registry/chain-registry-fixtures.url https://github.com/cosmology-tech/chain-registry-fixtures
	git submodule sync packages/chain-registry/chain-registry-fixtures
	git submodule update --init --remote packages/chain-registry/chain-registry-fixtures
	@echo "cosmology-tech/chain-registry-fixtures submodule is updated"
