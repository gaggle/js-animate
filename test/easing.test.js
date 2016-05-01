"use strict";
var map = require("lodash/map")
var easing = require("../lib/easing")

describe("easing", function () {
  var data = {
    linear: [
      {args: [0], ideal: 0},
      {args: [0.5], ideal: 0.5},
      {args: [1], ideal: 1}
    ],
    quadratic: [
      {args: [0], ideal: 0},
      {args: [0.1], ideal: 0.01},
      {args: [0.5], ideal: 0.25},
      {args: [1], ideal: 1}
    ],
    swing: [
      {args: [0], ideal: 0},
      {args: [0.1], ideal: 0.02},
      {args: [0.5], ideal: 0.5},
      {args: [0.9], ideal: 0.98},
      {args: [1], ideal: 1}
    ],
    circ: [
      {args: [0], ideal: 0},
      {args: [0.1], ideal: 0.01},
      {args: [0.5], ideal: 0.13},
      {args: [0.9], ideal: 0.56},
      {args: [1], ideal: 1}
    ],
    back: [
      {args: [0, 1], ideal: 0},
      {args: [0.5, 1], ideal: 0},
      {args: [0.9, 1], ideal: 0.65},
      {args: [1, 1], ideal: 1},
      {args: [0.5, 0.5], ideal: 0.06},
      {args: [0.9, 0.5], ideal: 0.69}
    ],
    bounce: [
      {args: [0], ideal: 0},
      {args: [0.5], ideal: 0.23},
      {args: [1], ideal: 1}
    ],
    elastic: [
      {args: [0, 1], ideal: 0},
      {args: [0.1, 1], ideal: -0},
      {args: [0.5, 1], ideal: -0.02},
      {args: [0.9, 1], ideal: 0.5},
      {args: [1, 1], ideal: -0.5}
    ]
  }

  map(data, function (value, key) {
    describe("#" + key, function () {
      value.forEach(function (d) {
        it("should return " + d.ideal + " from " + d.args, function () {
          var result = easing[key].apply(this, d.args)
          expect(+result.toFixed(2)).to.equal(d.ideal)
        })
      })
    })
  })
})
