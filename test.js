'use strict'

var test = require('tape')
var Observ = require('observ')
var toggle = require('./')

test(function (t) {
  var observ = Observ(false)
  t.notOk(observ())
  toggle(observ)
  t.ok(observ())
  toggle(observ)
  t.notOk(observ())
  t.end()
})
