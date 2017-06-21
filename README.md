# reactReduxPlayground
Installation:
1) Install nodenv https://github.com/nodenv/nodenv
2) Install plugins node-build nodenv-package-rehash nodenv-update
git clone https://github.com/nodenv/node-build.git $(nodenv root)/plugins/node-build
git clone https://github.com/nodenv/nodenv-package-rehash.git "$(nodenv root)"/plugins/nodenv-package-rehash
3) Run 'nodenv install 6.9.4' in console in the root of the project
4) Install yarn - https://yarnpkg.com/lang/en/docs/install/
5) Run 'yarn' in console in the root of the project
6) Run 'yarn dev-server' in console in the root of the project
7) Open localhost:8080 in browser
8) Enjoy =)

You can deploy the app to aws with production and stagin configs:
1) Add .env file to the root of the app
2) Check .env.example and add variables to .env
3) Run 'yarn webpack-prod' or 'yarn webpack-staging' to build and deploy
