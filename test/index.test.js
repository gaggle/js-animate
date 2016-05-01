"use strict";
require("es6-promise").polyfill()
var jsAnimate = require("../index")

describe("index", function () {
  it("should expose raw animate function", function () {
    assert.isFunction(jsAnimate.animate)
  })

  it("should expose all easing functions", function () {
    assert.isObject(jsAnimate.easing)
  })

  it("should expose opacity helper functions", function () {
    assert.isObject(jsAnimate.opacity)
  })
})
