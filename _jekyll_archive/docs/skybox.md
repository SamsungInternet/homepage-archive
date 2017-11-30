---
title: Skybox API (Gear VR)
layout: page
type: doc
image: /images/header-images/skybox-google-earth.jpg
short_dec: Setting the scene in Virtual Reality
---
The *Skybox API* for *Samsung Internet for Gear VR* allows you to display a custom 360 degree
background.

<iframe width="854" height="480" src="https://www.youtube.com/embed/9NefsqY3uGw" frameborder="0" allowfullscreen></iframe>

## Examples

### [Equirectangular](http://wiki.panotools.org/Equirectangular_Projection) images (spherical panoramas)

```javascript
// First, check if the API is available
if ('SamsungChangeSky' in window) {
  // Set the spherical panorama image
  window.SamsungChangeSky({ sphere: 'http://site.com/my-360-image.jpg' });
}
```

### Mono [cubemap](https://en.wikipedia.org/wiki/Cube_mapping)

To set the same cubemap for both eyes:

```javascript
// First, check if the API is available
if ('SamsungChangeSky' in window) {
  // Set the cubemap images
  window.SamsungChangeSky({ front: 'f.png', back: 'r.png', left: 'l.png', right: 'r.png', up:  'u.png', down: 'd.png' });
}
```

### Stereo [cubemap](https://en.wikipedia.org/wiki/Cube_mapping)

To set different cubemaps for each eye:

```javascript
// First, check if the API is available
if ('SamsungChangeSky' in window) {
  // Set the cubemap images
  window.SamsungChangeSky({ Lfront: 'Lf.jpg', Lback: 'Lb.jpg', Lleft: 'Ll.jpg', Lright: 'Lr.jpg', Lup: 'Lu.jpg', Ldown: 'Ld.jpg',
    Rfront: 'Rf.jpg', Rback: 'Rb.jpg', Rleft: 'Rl.jpg', Rright: 'Rr.jpg', Rup: 'Ru.jpg', Rdown: 'Rd.jpg' });
}
```

## Sample code

[github.com/SamsungInternet/set-skybox](https://github.com/SamsungInternet/set-skybox)

## Demo

[samsunginter.net/set-skybox/](https://samsunginter.net/set-skybox/)

## Browser support

The Skybox API was introduced in Samsung Internet for Gear VR version 4.2.

## Further resources

* ["Control the world with the Skybox API"](https://medium.com/samsung-internet-dev/control-the-world-with-the-skybox-api-6e8ca213f171).
