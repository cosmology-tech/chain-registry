.PHONY: def update-registry update-fixtures

def: update-registry update-fixtures

update-registry:
	@echo "Updating cosmos/chain-registry submodule"
	git submodule sync repos/chain-registry
	git submodule update repos/chain-registry
	@echo "cosmos/chain-registry submodule is updated to the commit specified in .gitmodules"

update-fixtures:
	@echo "Updating chain-registry/chain-registry-fixtures submodule"
	git submodule sync repos/chain-registry-fixtures
	git submodule update repos/chain-registry-fixtures
	@echo "chain-registry/chain-registry-fixtures submodule is updated to the commit specified in .gitmodules"