---
title: Ambient Badging
layout: page
image: /images/header-images/dj.jpg
twitter_image: https://samsunginter.net/images/docs/ambient-badging.png
description: Ambient Badging allows the user to conveniently add Web Apps to their homescreen.
---

Ambient Badging is when we subtly alert that the Web Site they are currently on is also a Web App which can be saved like an app on their homescreen.

We display a '+' symbol to indicate it can be installed. Tapping it opens a small menu.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DLYEAWeVQps" frameborder="0" allowfullscreen></iframe>

To make your website display Ambient Badging you need to met the following requirements:

* On HTTPS
* Has a Service Worker Registered
* Has a Web App Manifest
* The Web App Manifest has `name` or `short_name`
* The Web App Manifest has `start_url`
* The Web App Manifest has an icon where size is at least `144x144`
* The Web App Manifest has display set to `standalone` or `fullscreen`

These requirements may change in later versions of Samsung Internet

The test for the Service Worker occurs once the page has finished loading.

## Support

Ambient Badging was introduced in Samsung Internet 5.2

