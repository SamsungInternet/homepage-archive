---
title: CloseBy
layout: page
image: /images/header-images/lighthouse-beacon.jpg
description: Using Physical web Beacons with the Samsung Internet Web Browser
---
CloseBy is Samsung Internet's [Physical Web](https://google.github.io/physical-web/) beacon service. It is accessed via the
Extensions menu:

![CloseBy showing Physical Web beacons](/images/docs/closeby-extensions.png)

While enabled, you may receive a silent notification when a nearby beacon is detected. You can also manually scan by tapping CloseBy on the Extensions menu:

![CloseBy showing Physical Web beacons](/images/docs/closeby-beacons.png)

## Criteria

The URL must be advertised in the [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url) format. Furthermore, the page that the URL resolves to:

* Must be served over HTTPS
* Must not be blocked by robots.txt
* Must not include malicious contents / malware
* Must be found and reachable, without timing out
* Must not have an SSL certificate error
* Must not be empty

## Browser support

CloseBy was introduced in Samsung Internet v5.4.

## Further resources

* [Physical Web overview](/docs/physical-web)
* ["Bringing the real world to your browser, with CloseBy"](https://medium.com/samsung-internet-dev/bringing-the-real-world-to-your-browser-with-closeby-830cd162547e)
