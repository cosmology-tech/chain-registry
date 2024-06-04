.PHONY: def update-cosmos update-fixtures

def: update-cosmos update-fixtures

update-cosmos:
	@echo "Updating cosmos/chain-registry submodule"
	git config submodule.repos/chain-registry.url https://github.com/cosmos/chain-registry
	git submodule sync repos/chain-registry
	git submodule update --init --remote repos/chain-registry
	@echo "cosmos/chain-registry submodule is updated"

update-fixtures:
	@echo "Updating chain-registry/fixtures submodule"
	git config submodule.repos/fixtures.url https://github.com/chain-registry/fixtures
	git submodule sync repos/fixtures
	git submodule update --init --remote repos/fixtures
	@echo "chain-registry/fixtures submodule is updated"
