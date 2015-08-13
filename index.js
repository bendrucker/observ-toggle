'use strict'

var assertObserv = require('assert-observ')

module.exports = function observToggle (observ) {
  assertObserv(observ)
  observ.set(!observ())
}
