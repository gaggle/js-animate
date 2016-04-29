"use strict";

// Based on http://jsfiddle.net/LzX4s/
module.exports = function (options, callback) {
  return new Promise(function (resolve) {
    var start = new Date
    var id = setInterval(function () {
      var timePassed = new Date - start
      var progress = timePassed / (options.duration || 500)
      if (options.progressCb) options.progressCb(progress)
      if (progress > 1) {
        progress = 1
      }
      options.progress = progress
      var delta = options.delta(progress)
      options.step(delta)
      if (progress == 1) {
        clearInterval(id)
        callback ? callback() : resolve()
      }
    }, options.delay || 10)
  })
}
