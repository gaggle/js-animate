"use strict";
require("es6-promise").polyfill()
var opacity = require("../lib/opacity")

describe("opacity", function () {
  var el
  beforeEach(function () {
    el = document.createElement("div")
  })

  var sections = [{name: "fadeIn", start: 0, ideal: 1}, {name: "fadeOut", start: 1, ideal: 0}]
  sections.forEach(function (e) {
    var func = opacity[e.name]

    beforeEach(function () {
      el.style.opacity = e.start
    })

    describe("#" + e.name, function () {
      it("should return a promise", function () {
        return func(el)
      })

      it("should support completion callback", function (done) {
        func(el, done)
      })

      it("should support options AND completion callback", function (done) {
        func(el, {}, done)
      })

      it("should support duration", function () {
        var start = Date.now()
        var duration = 100
        return func(el, {duration: duration})
          .then(function () {
            var elapsed = Date.now() - start
            var maxDuration = duration * 1.5
            assert.isBelow(elapsed, maxDuration)
          })
      })

      it("should support progress callback", function () {
        var called = false
        return func(el, {
          duration: 10,
          progress: function () {
            called = true
          }
        })
          .then(function () {
            assert.isTrue(called)
          })
      })

      it("should animate opacity", function () {
        return func(el)
          .then(function () {
            assert.equal(el.style.opacity, e.ideal)
          })
      })
    })
  })
})
