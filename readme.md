# INSTALL
## Install Node Modules
- npm install

## Sharp compress image
- npm run build-image

## Compile & run Website
- gulp build
- npm run build
- npm run start-dev

# TESTING
## E2E on WSL2
xvfb-run --auto-servernum npm run e2e

## KARMA on WSL2
export CHROME_BIN=/usr/bin/google-chrome
xvfb-run --auto-servernum npm run test