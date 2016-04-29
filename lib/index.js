"use strict";
var isFunction = require("lodash/isFunction")
var animate = require("./animate")
var easing = require("./easing")

exports.fadeOut = function (element, options, callback) {
  if (isFunction(options) && !callback) {
    callback = options
    options = {}
  } else if (!options) {
    options = {}
  }
  var to = 1
  return animate({
    duration: options.duration,
    delta: function (progress) {
      progress = this.progress
      return easing.swing(progress)
    },
    progressCb: options.progress,
    step: function (delta) {
      element.style.opacity = to - delta
    }
  }, callback)
}

exports.fadeIn = function (element, options, callback) {
  if (isFunction(options) && !callback) {
    callback = options
    options = {}
  } else if (!options) {
    options = {}
  }
  var to = 0
  return animate({
    duration: options.duration,
    delta: function (progress) {
      progress = this.progress
      return easing.swing(progress)
    },
    progressCb: options.progress,
    step: function (delta) {
      element.style.opacity = to + delta
    }
  }, callback)
}
