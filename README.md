OptLeaf-Webapp
-------

OptLeafのwebクライアント。

ドメインは準備中

* Node.js v16.14.0
* npm 8.3.1
* react.js ^18.1.0
* typescript ^4.6.4




コマンドログ
-------

```
# React app 作成 with typescript
npx create-react-app optleaf-webapp --template typescript

# React 設定ファイル可視化
npm run eject

# scss 対応
npm install -s node-sass

# storybook セットアップ
npx -p @storybook/cli sb init --use-npm

# eslint セットアップ コンパイル時に厳しくチェックするやつ
npm install eslint --save-dev
npm init @eslint/config
npm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npx install-peerdeps --dev eslint-config-airbnb

# Prettier セットアップ
npm add -D prettier eslint-config-prettier
```
