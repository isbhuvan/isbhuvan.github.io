# Variables
PORT=5500

.PHONY: help install serve lint clean

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies (if using npm)
	npm install

serve: ## Launch a local development server
	@echo "Starting local server on port $(PORT)..."
	python3 -m http.server $(PORT)

lint: ## Run HTML hint to check for syntax errors
	npx htmlhint "**/*.html"

clean: ## Remove temporary files and cache
	rm -rf .DS_Store
	@echo "Cleaned up system junk."

lint-md: ## Check markdown files for formatting errors
	docker run -v $$(pwd):/work davidanson/markdownlint-cli2:latest "/work/**/*.md"

lint-commit: ## Check the last commit message for conventional standards
	npx commitlint --from HEAD~1 --to HEAD --verbose