.PHONY: def update-registry update-fixtures

def: update-registry update-fixtures

update-registry:
	@echo "Updating cosmos/chain-registry submodule"
	git config submodule.repos/chain-registry.url https://github.com/cosmos/chain-registry.git
	git submodule sync repos/chain-registry
	git submodule update --init --remote repos/chain-registry
	@echo "cosmos/chain-registry submodule is updated"

update-fixtures:
	@echo "Updating chain-registry/chain-registry-fixtures submodule"
	git config submodule.repos/chain-registry-fixtures.url https://github.com/chain-registry/chain-registry-fixtures.git
	git submodule sync repos/chain-registry-fixtures
	git submodule update --init --remote repos/chain-registry-fixtures
	@echo "chain-registry/chain-registry-fixtures submodule is updated"