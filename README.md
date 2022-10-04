# Svelte boilerplate for Chrome Extension (menifest v3)

## overview

This repository is Svelte-boilerplate for Chrome-Extension (menifest v3) development.

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
