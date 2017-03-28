# Vue Hot Loader

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/jshmrtn/vue-hot-loader/master/LICENSE)
[![Build Status](https://travis-ci.org/jshmrtn/vue-hot-loader.svg?branch=master)](https://travis-ci.org/jshmrtn/vue-hot-loader)
[![NPM Version](https://img.shields.io/npm/v/vue-hot-loader.svg)](https://www.npmjs.com/package/vue-hot-loader)

The Vue Hot Loader adds `webpack` HMR compatibility to your standard JS vue components.

## Why

The standard [`vue-loader`](https://github.com/vuejs/vue-loader) is hard to use with standard webpack loaders like the html loader. (If you want to use html interpolation for example.)

This loader only adds HMR capabilities to your normal JS code without the need to override all the loaders you know from other webpack / JS projects.

## Usage

Install `vue-hot-loader` via `npm` or `yarn`.

```bash
yarn add vue-hot-loader #OR
npm install vue-hot-loader --dev
```

Add a loader in your webpack configuration.

```js
module.exports = {
    // ...
    loaders: [
        {
            test: /\.vue\.js/,
            loader: 'vue-js',
        },
        // ...
    ],
    // ...
};
```

Call your vue component files `[name].vue.js`.

Example `component.vue.js`:

```js
import template from './component.html';

import './component.less';

export default {
    name: 'component',
    template,
};
```

_PS: This example uses [`less-loader`](https://github.com/webpack/less-loader) and [`vue-html-loader`](https://github.com/vuejs/vue-html-loader)._ 