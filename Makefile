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
	@cd repos/chain-registry && \
	echo "Last 2 commits in repos/chain-registry:" && \
	git log -n 2 --oneline && \
	cd - >/dev/null
	@cd repos/chain-registry-fixtures && \
	echo "Last 2 commits in repos/chain-registry-fixtures:" && \
	git log -n 2 --oneline && \
	cd - >/dev/null
