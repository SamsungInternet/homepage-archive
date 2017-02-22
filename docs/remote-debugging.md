---
title: Remote debugging
layout: page
image: http://localhost:4000/images/docs/dev-tools.png
---
# Remote debugging

This is a short guide for debugging a web page in Samsung Internet on your mobile device, via a
desktop computer.

## Prerequisites

1. If you wish to connect via a USB cable (Wi-Fi is also possible, see below) and have not done so
already, enable USB Debugging on your Samsung device:
  * Go to `Settings > About device` and tap on the build number entry seven times, to unlock 'Developer Options'
  * In `Settings > Developer options`, switch on 'USB Debugging'

1. Install Android SDK Tools on your desktop computer. A simple way to do this is to [install Android Studio](https://developer.android.com/studio/install.html).
Alternatively, you can [install it separately](https://developer.android.com/studio/releases/sdk-tools.html).

1. If you do not have it already, install the [Chrome browser](https://www.google.co.uk/chrome/browser/) on your desktop computer.

## Set up remote debugging via Chrome

1. Connect your Samsung device to your desktop computer via a USB cable. If you are shown an
*"Allow access to device data"* prompt, choose "Allow".

1. Open up the Chrome browser on your desktop and visit `chrome://inspect`.

1. Check that your Samsung device is listed. If it is not, you
may need to open the Chrome app on your Samsung device.

1. Any pages you have open in Samsung Internet should be listed here for inspection.

## To connect to a locally running server

1. On the `chrome://inspect` page, enable port forwarding for any ports you wish to access on your desktop computer:

    ![Port forwarding](/images/docs/port-fowarding.png)

1. Open Samsung Internet on your Samsung device and visit your local site via `127.0.0.1:` followed by
the port number. For example, `127.0.0.1:4000`.

## Inspect

1. Click the 'inspect' link underneath the entry for the page you wish to debug:

    ![Chrome inspect page](/images/docs/chrome-inspect.png)

1. Now you can use the debugging tools in Chrome, as usual. Please see the
[Chrome DevTools guide](https://developer.chrome.com/devtools) for more information.

    <img src="/images/docs/dev-tools.png" width="600px" alt="Dev tools"/>

## Wireless debugging

It is also possible to debug over Wi-Fi, instead of a USB connection. (This is particularly helpful for
debugging Samsung Internet for Gear VR). [Check here for how to set up ADB](https://developer.android.com/studio/command-line/adb.html#wireless).
You may find the [ADB Wireless app](https://play.google.com/store/apps/details?id=za.co.henry.hsu.adbwirelessbyhenry&hl=en_GB)
useful in order to assist with this.
