---
title: Remote debugging
layout: page
---
# Remote debugging

This is a short guide for debugging a web page in Samsung Internet, via your desktop computer.

## Prerequisites

1. If you have not done so already, enable USB Debugging on your Samsung device:
  * Go to `Settings > About device` and tap on the build number entry seven times, to unlock 'Developer Options'
  * In `Settings > Developer options`, switch on 'USB Debugging'

1. Install Android SDK Tools on your desktop computer. A simple way to do this is to [install Android Studio](https://developer.android.com/studio/install.html). 
Alternatively, you can [install it separately](https://developer.android.com/studio/releases/sdk-tools.html).  

1. Install the [Chrome browser](https://www.google.co.uk/chrome/browser/) on your desktop computer.  

## Set up remote debugging via Chrome

1. Connect your Samsung device to your desktop computer via a USB cable. If you are shown an 
"Allow access to device data" prompt, choose "Allow".

1. Open up the Chrome browser on your desktop and visit `chrome://inspect`.

1. Check that your Samsung device is listed. If it is not, you
may need to open the Chrome app on your Samsung device. 

1. Any pages you have open in Samsung Internet should be listed here for inspection.

## To connect to a locally running server

1. On the `chrome://inspect` page, enable port forwarding for any ports you wish to access on your desktop computer:

![/images/docs/port-forwarding.png]

1. Open Samsung Internet on your Samsung device and visit your local site via `127.0.0.1:` followed by
the port number. For example, `127.0.0.1:4000`.

## Debug

Use Chrome's debugging tools... 
