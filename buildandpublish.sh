!#bin/bash
rm -Rf ./node_modules
rm -Rf build
yarn install
yarn build
cd build && aws s3 sync . s3://core-color --acl public-read
