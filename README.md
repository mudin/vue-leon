# vue-leon

<img align="right" height="178" title="vue-leon Limit logo" src="docs/logo.png">

<a href="https://travis-ci.org/mudin/vue-leon">
  <img src="https://travis-ci.org/mudin/vue-leon.svg?branch=master" alt="Downloads">
</a>
<a href="https://www.npmjs.com/package/vue-leon">
  <img src="https://img.shields.io/npm/dt/vue-leon.svg" alt="Downloads">
</a>
<a href="https://www.npmjs.com/package/vue-leon">
  <img src="https://img.shields.io/npm/v/vue-leon.svg" alt="Version">
</a>
<a href="https://www.npmjs.com/package/vue-leon">
  <img src="https://img.shields.io/npm/l/vue-leon.svg" alt="License">
</a>
<a href="https://gitter.im/vue-leon/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
  <img src="https://badges.gitter.im/vue-leon/Lobby.svg" alt="Gitter">
</a>

[![Coverage Status](https://coveralls.io/repos/github/mudin/vue-leon/badge.svg?branch=master)](https://coveralls.io/github/mudin/vue-leon?branch=master)

vue-leon is a JavaScript library for the [Vue](https://vuejs.org/) framework that wraps [LeonSans](https://leon-kim.com) making it easy to create reactive geometric sans-serif typeface.

## How to install

```bash
npm install vue-leon --save
```

### Importing the library in Webpack / Rollup

```html
<template>
  <vue-leon ref="leon" :options="options" :controll="controll"></vue-leon>
</template>
```

```javascript
import VueLeon from "vue-leon";

export default {
  components: {
    VueLeon
  },
  data() {
    return {
      options: {
        text: "Hello World",
        size: 100,
        weight: 200
      },
      controll: {
        points: false,
        box: false,
        grids: false,
        roundCap: false,
        multiply: false
      }
    };
  }
};
```

This will reduce the size of the bundle significantly

## Documentation

Coming soon

## Authors

Mudin Ibrahim

## Contributors

Thanks goes to these [wonderful people](https://github.com/mudin/vue-leon/contributors)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
