# canvas-dial

A simple dial or gauge implemented in HTML5 Canvas and designed to be
performant and flexible.

## [Demo](http://requirebin.com/?gist=4fe63c664c753fedae1d)

## API

`new Dial(element, options)` create a new dial, owning a single DOM element.
Options are listed below

`dial.draw(value)` update the dial to show a new value.

### Options

```js
  {
    // the width & height of the gauge canvas element
    diameter: 20,
    // the width of the stroke indicating the gauge's background
    // and foreground values
    width: 8,
    // the outer width of the gauge
    outer: 15,
    // the gap at the bottom of the gauge, if any
    gap: 10,
    // the strokeStyle of the background that indicates
    // the total range of the gauge
    background: '#eee',
    // the strokeStyle of the dial - the part that shows data
    foreground: '#00f',
    // the minimum value in the scale.
    min: 0,
    // the value from which the gauge starts. 0 is common
    // for absolute values, 0.5 can be useful for things like
    // saturation/desaturation
    start: 0.5,
    // the maximum value represented by the gauge
    max: 1
  }
```
