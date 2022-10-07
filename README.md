# Svelte boilerplate for Chrome Extension (manifest v3)

## overview

This repository is Svelte-boilerplate for Chrome-Extension (manifest v3) development.

## how to use

1. Installation & Run dev server

```
$ git clone https://github.com/skymins04/svelte-chrome-extension-boilerplate.git
$ cd svelte-chrome-extension-boilerplate
$ npm install (or "yarn install")
$ npm run dev (or "yarn run dev")
```

2. Installing the public folder as a Chrome extension

## icon generator

This repository contains a Python script to automatically generate size-specific icons for Chrome-Extension.

In this Python script, icon images are created at the current script execution location.

```
$ python3 ./icon-generator.py <blahblah.png>
```

## directory structure

```
/
ㄴ .vscode/
ㄴ public/
| ㄴ build/
| | ㄴ bundle.js
| | ㄴ bundle.css
| ㄴ icon/
| ㄴ manifest.json
| ㄴ popup.html
| ㄴ global.css
| ㄴ background.js
ㄴ src/
| ㄴ components/
| ㄴ lib/
| | ㄴ hooks.ts
| | ㄴ store.ts
| ㄴ App.svelte
| ㄴ main.ts
| ㄴ background.ts
ㄴ icon-generator.py
ㄴ package.json
ㄴ rollup.config.js
ㄴ tsconfig.json
```

| file/directory name  | description                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------- |
| .vscode/             | Visual Studio Code Configuration File Directory                                                               |
| public/              | Directory of built static files for registration as chrome extensions                                         |
| public/build/        | Bundled js file used in popup.html                                                                            |
| public/icon/         | Chrome extension icon image file directory                                                                    |
| public/manifest.json | Metadata definition files for Chrome Extensions                                                               |
| public/popup.html    | HTML files to be used for Chrome extension pop-ups                                                            |
| public/global.html   | Global style definition file used in popup.html                                                               |
| public/background.js | Service worker files for Chrome Extensions                                                                    |
| src/                 | Directory of source files before build                                                                        |
| src/components/      | svelte component directory                                                                                    |
| src/lib/             | Utility/constant directory other than the svelte component                                                    |
| src/lib/hooks.ts     | Util function files available in Svelte, similar to Hook in React                                             |
| src/lib/store.ts     | Global Store in Svelte                                                                                        |
| src/App.svelte       | Svelte Main Component                                                                                         |
| src/main.ts          | Entry file for bundle used in popup.html                                                                      |
| src/background.ts    | Source code before building Chrome extension service worker file, built together as Svelte is built by rollup |
| icon-generator.py    | Python scripts to generate icon files for Chrome Extensions by Size                                           |
| package.json         | Node package file                                                                                             |
| rollup.config.js     | rollup bundler settings file                                                                                  |
| tsconfig.json        | typescript settings file                                                                                      |
