"use strict";
var merge = require("lodash/merge")
var easing = require("./easing")

// Based on http://jsfiddle.net/LzX4s/
module.exports = function (options, callback) {
  options = merge({
    delta: easing.linear,
    duration: 500
  }, options)
  return new Promise(function (resolve) {
    var start = new Date
    var id = setInterval(function () {
      var timePassed = new Date - start
      var progress = timePassed / options.duration
      if (progress > 1) {
        progress = 1
      }
      options.progress = progress
      var delta = options.delta(progress)
      if (options.step) options.step(delta)
      if (progress == 1) {
        clearInterval(id)
        callback ? callback() : resolve()
      }
    }, options.delay || 10)
  })
}
