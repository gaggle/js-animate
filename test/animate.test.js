"use strict";
require("es6-promise").polyfill()
var animate = require("../animate")

describe("animate", function () {
  var clock
  beforeEach(function () {
    clock = sinon.useFakeTimers()
  })

  afterEach(function () {
    clock.restore()
  })

  it("should start naked", function () {
    var prom = animate()
    clock.tick(10000) // more than any default duration!
    return prom
  })

  it("should support durations less than delay", function () {
    var prom = animate({duration: 10, delay: 20})
    clock.tick(20)
    return prom
  })

  it("should resolve promise on completion", function () {
    var prom = animate({duration: 10})
    clock.tick(9)
    expect(prom._state).to.be.undefined
    clock.tick(1)
    return prom
  })

  it("should call callback on completion", function (done) {
    animate({duration: 10}, function () {
      done()
    })
    clock.tick(10)
  })

  it("should call each step", function (done) {
    animate({
      duration: 10,
      step: function (delta) {
        expect(delta).to.eql(1)
        done()
      }
    })
    clock.tick(10)
  })

  it("should support custom easings", function (done) {
    var steps = [1, 2]
    animate({
      duration: 20,
      delta: function (progress) {
        return progress + progress
      },
      step: function (delta) {
        expect(delta).to.eql(steps.shift())
        if (!steps.length) done()
      }
    })
    clock.tick(100)
  })
})
