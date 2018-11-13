# observ-toggle [![Build Status](https://travis-ci.org/bendrucker/observ-toggle.svg?branch=master)](https://travis-ci.org/bendrucker/observ-toggle) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-toggle.svg)](https://greenkeeper.io/)

> Toggle a boolean observable value


## Install

```
$ npm install --save observ-toggle
```


## Usage

```js
var toggle = require('observ-toggle')
var Observ = require('observ')

var value = Observ(false)

toggle(value)
value()
//=> true
```

## API

#### `toggle(observable)` -> `undefined`

##### observable

*Required*  
Type: `function`

An observable value (a function that can be called to get the value, plus a `set` method to change the value).


## License

MIT © [Ben Drucker](http://bendrucker.me)
