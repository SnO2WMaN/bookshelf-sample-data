.PHONY: bundle
bundle:
	yarn install --frozen-lockfile --production
	yarn run bundle
