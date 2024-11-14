.PHONY: def update-registry update-fixtures submodule-status update-json

def: update-registry update-fixtures

update-registry:
	@echo "Updating chain-registry submodule to latest in repos/registry-json"
	git submodule update --remote --init --recursive repos/registry-json

update-fixtures:
	@echo "Updating chain-registry/chain-registry-fixtures submodule"
	git submodule update --remote --init --recursive repos/chain-registry-fixtures

update-json:
	@echo "Updating only the registry-json submodule"
	git submodule update --remote --init --recursive repos/registry-json

submodule-status:
	@echo "Checking submodule statuses..."
	@cd repos/registry-json && \
	echo "Last 2 commits in repos/registry-json:" && \
	git log -n 2 --oneline && \
	cd - >/dev/null
	@cd repos/chain-registry && \
	echo "Last 2 commits in repos/chain-registry:" && \
	git log -n 2 --oneline && \
	cd - >/dev/null
	@cd repos/chain-registry-fixtures && \
	echo "Last 2 commits in repos/chain-registry-fixtures:" && \
	git log -n 2 --oneline && \
	cd - >/dev/null
