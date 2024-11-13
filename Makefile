.PHONY: def update-registry update-fixtures submodule-status

def: update-registry update-fixtures

update-registry:
	@echo "Updating cosmos/chain-registry submodule to latest"
	git submodule update --remote --init --recursive repos/chain-registry

update-fixtures:
	@echo "Updating chain-registry/chain-registry-fixtures submodule"
	git submodule update --remote --init --recursive repos/chain-registry-fixtures

submodule-status:
	@echo "Checking submodule statuses..."
	@pushd repos/chain-registry >/dev/null; \
	echo "Last 2 commits in repos/chain-registry:"; \
	git log -n 2 --oneline; \
	popd >/dev/null
	@pushd repos/chain-registry-fixtures >/dev/null; \
	echo "Last 2 commits in repos/chain-registry-fixtures:"; \
	git log -n 2 --oneline; \
	popd >/dev/null
