---
title: 360° videos
layout: page
type: doc
image: /images/docs/360-video-android2.png
twitter_image: https://samsunginter.net/images/docs/360-video-android2.png
description: How to use Immersive 360 Video for Virtual Reality on Samsung Internet and Samsung Internet for GearVR.
---
Enable videos to be displayed immersively in 360 degrees, by setting `dimension`
on the `type` attribute.

Possible values for type:

* `dimension=3d-lr`: Side-by-Side 3D Video
* `dimension=3d-tb`: Top-to-bottom 3D Video
* `dimension=360`: 360˚ Video
* `dimension=360-lr`: Side-by-side 3D 360˚ Video
* `dimension=360-tb`: Top-to-bottom 3D 360˚ Video
* `dimension=180`: 180˚ Video
* `dimension=180-lr`: Side-by-side 3D 180˚ Video
* `dimension=180-tb`: Top-to-bottom 3D 180˚ Video

In Samsung Internet for Android, 360° videos can be viewed by tapping on the full-screen option
and rotating your mobile device to view different parts of the scene:

![360° video option displayed in Samsung Internet for Android](/images/docs/360-video-android1.png)

![360° video viewed in Samsung Internet for Android](/images/docs/360-video-android2.png)


## Example

```html
<video src=”/360.webm" type=”video/webm; dimension=360;">
```

## Demo

[360 video example on Github](https://github.com/SamsungInternet/examples/tree/master/360-video)

[Live Demo](https://samsunginter.net/examples/360-video/)

## Browser support

360 videos were introduced in Samsung Internet version 4.2.

## Further resources

* [Samsung Internet for Gear VR overview](http://developer.samsung.com/internet#gearvr-overview)
