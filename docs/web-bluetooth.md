---
title: Web Bluetooth
layout: page
image: /images/header-images/bluetooth-drone.jpg
description: Access and control Bluetooth Low Energy devices from your web browser 
---
Support for [Web Bluetooth](https://github.com/WebBluetoothCG/web-bluetooth) (without requiring a flag to be enabled) has been introduced [from Samsung Internet v6.4](https://medium.com/samsung-internet-dev/lets-connect-with-samsung-internet-v6-4-stable-1f197d43a812).

*Please note that Android 6.0 Marshmallow or later is required.*

## Support

### GATT Communication API

| Feature                                  	  | Support |
| ------------------------------------------- | ------- |
| getAvailability()                           |     	  |
| Referring Device (CloseBy)	                |         |
| Discovery                                   |	✓       |
| └ Service list                              |	✓       |
| └ Name or prefix                            |	✓       |
| └ Manufacturer/Service data                 |         |	 
| └ acceptAllDevices                          |	✓       |
| Chooser UI                                  |	✓       |
| permissions.request()                       |         |	 
| permissions.query()                         |         |	 
| permissions.revoke()                        |	        |
| watchAdvertisements()                       |	        |
| Persistent Device IDs                       |	        |
| GATT Server Connect                         |	✓       |
| GATT Server Disconnect                      |	✓       |
| Hanging connect() abortable by disconnect() |         |	 
| getPrimaryService*()                        |	✓       |
| getIncludedService*()	                      |         |
| getCharacteristic*()                        |	✓       |
| Characteristic Properties                   |	✓       |
| Read Characteristic                         |	✓       |
| Write Characteristic                        |	✓       |
| Start/Stop Notifications                    |	✓       |
| Descriptors                                 |	✓       |
| Event bubbling	                            |         |
| Device Disconnected Event                   |	✓       |
| Service Changed Event                       |         |	 
| BluetoothUUID                               |	✓       |
| TypeError for bad UUIDs                     |	✓       |
| Invalidate GATT attributes upon disconnect  |	✓       |
| GATT Blocklist                              |	✓       |
| Low-latency Blocklist Updates               |	✓       |

### Scanning API

| Feature                                  	  | Support |
| ------------------------------------------- | ------- |
| Advertisements Scanning	                    |         |

## Further resources

* [Web Bluetooth specification](https://webbluetoothcg.github.io/web-bluetooth/)
* [Web Bluetooth API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
