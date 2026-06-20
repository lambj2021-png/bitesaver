# BiteSaver — Data & Build Commands
# Usage: make <target>

.PHONY: scrape build dev deploy

# Run the data scraper to fetch fresh deals
scrape:
	cd /home/team/shared && ./venv/bin/python bitesaver/scraper/scraper.py

# Build the production app
build:
	cd /home/team/shared/bitesaver && npm run build

# Scrape + Build (refresh data and rebuild)
all: scrape build
	@echo "✅ Done! App rebuilt with fresh data."

# Run dev server
dev:
	cd /home/team/shared/bitesaver && npx vite