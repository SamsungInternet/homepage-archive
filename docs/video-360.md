---
title: 360° videos
layout: page
type: doc
---
# 360° videos

Enable videos to be displayed immersively in 360 degrees, by setting `dimension`
on the `type` attribute.

Possible values:

* `dimension=3d-lr`: Side-by-Side 3D Video
* `dimension=3d-tb`: Top-to-bottom 3D Video
* `dimension=360`: 360˚ Video
* `dimension=360-lr`: Side-by-side 3D 360˚ Video
* `dimension=360-tb`: Top-to-bottom 3D 360˚ Video
* `dimension=180`: 180˚ Video
* `dimension=180-lr`: Side-by-side 3D 180˚ Video
* `dimension=180-tb`: Top-to-bottom 3D 180˚ Video

## Example

```html
<video src=”/360.webm" type=”video/webm; dimension=360;>
```

## Demo

[360 video example on Github](https://github.com/SamsungInternet/examples/tree/master/360-video)

[Live Demo](https://samsunginter.net/examples/360-video/)

## Browser support

360 videos were introduced in Samsung Internet version 4.2.
