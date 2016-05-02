# js-animate
[![Build Status](https://travis-ci.org/gaggle/js-animate.svg?branch=master)](https://travis-ci.org/gaggle/js-animate)

Very simple js-based animation. Based on http://jsfiddle.net/LzX4s/, I just switched to Promises and added tests.

### To install:

    npm install gaggle/js-animate

### Simple example:

    var animate = require("js-animate/animate")
    
    animate({
      duration: 1000,
      step: function (delta) {
        element.style.opacity = delta
      }
    })

### Includes various easing functions:

    linear, quadratic, swing, circ, back, bounce, elastic
    
### And convenience functions:

    var opacity = require("js-animate/opacity")
    opacity.fadeOut(element, {duration: 1000})
      .then(function () {
        return opacity.fadeIn(element)
      })
