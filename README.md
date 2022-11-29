OptLeaf-Webapp
-------

OptLeafのwebクライアント。

https://optleaf.site

* Node.js v16.14.0
* npm 8.3.1
* nodenv v1.4.0
* react.js ^18.2.0
* typescript ^4.6.4





## サーバー起動、コンパイル
```
npm run dev --host
```


## コード生成
```
hygen feature new
hygen component new

# GraphQL
npm run codegen
```


## コードチェック
```
npm run lint
```


## フォーマット
```
npm run format
```


## storybook
```
npm run storybook
```




セットアップログ
-------

```
# プロジェクト作成
npm create vite@latest optleaf-webapp
✔ Select a framework: › React
✔ Select a variant: › TypeScript

# Nodeバージョン固定
nodenv local 16.14.0

# sass
npm add -D sass

# eslintインストール
# see https://zenn.dev/longbridge/articles/ae3aa36cf17d73
npm install eslint --save-dev
npm init @eslint/config
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · YAML
npm install eslint-config-airbnb-typescript --save-dev

# prettierインストール
npm install prettier --save-dev
npm install eslint-config-prettier --save-dev

# StoryBookセットアップ
# see https://zenn.dev/longbridge/articles/13e65ef71455e4
      https://zenn.dev/sum0/articles/9463d16d9d40e2#storybook%E3%81%AF99%25%E8%87%AA%E5%8B%95%E7%94%9F%E6%88%90%E3%81%95%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8
npx storybook init --builder @storybook/builder-vite

# パスエイリアス設定 (@/ → ./src/)
# see https://zenn.dev/longbridge/articles/5e33ff1a625158
npm install eslint-import-resolver-typescript --save-dev

# hygen導入
# see https://zenn.dev/sum0/articles/d40ab2a23c7e2a
#     https://www.hygen.io/docs/quick-start
brew tap jondot/tap
brew install hygen
hygen init self
# package.jsonから"type": "module",を削除、影響は不明

# GraphQL Code Generator
npm install graphql
npm install -D typescript
npm install -D @graphql-codegen/cli
npx graphql-code-generator init
? What type of application are you building? Application built with React
? Where is your schema?: (path or url) ../optleaf-api/**/*.graphql
? Where are your operations and fragments?: ./src/graphql/query/*.graphql
? Where to write the output: src/graphql
? Do you want to generate an introspection file? Yes
? How to name the config file? codegen.yml
? What script in package.json should run the codegen? codegen
npm install -D @graphql-codegen/typescript-react-query
# 書き換え } from '@tanstack/react-query'; → } from 'react-query';

# scoped css
# see https://www.npmjs.com/package/rollup-plugin-react-scoped-css

# msw
# see https://blog.engineer.adways.net/entry/2021/10/08/163000#GraphQL%E3%81%AE%E3%83%A2%E3%83%83%E3%82%AF%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B
# https://mswjs.io/docs/
```
