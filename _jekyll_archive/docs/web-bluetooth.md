---
title: Web Bluetooth
layout: page
image: /images/header-images/bluetooth-drone.jpg
description: Access and control Bluetooth Low Energy devices from your web browser 
---
Support for [Web Bluetooth](https://github.com/WebBluetoothCG/web-bluetooth) has been introduced from Samsung Internet v6.x, 
behind a flag.

Web Bluetooth is currently an experimental web feature. It can be enabled by switching on the `internet://flags/#enable-web-bluetooth/` flag and relaunching Samsung Internet.

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
