---
title: Web Payments
layout: page
image: /images/header-images/payment-card.jpg
description: Take payments on the web with the requestPayment API
redirect_from: "/payments"
---
Samsung Internet supports the [Payment Request API](https://www.w3.org/TR/payment-request/), providing
a consistent, easy-to-use check-out experience.

Please note that the Payment Request API simply provides the user interface.
You will still need a suitable [payment gateway](https://en.wikipedia.org/wiki/Payment_gateway)
to provide secure payment processing.

## Sample code

There are [example projects here on Github](https://github.com/SamsungInternet/examples).

Here is a simple extracted sample:

```javascript
if (window.PaymentRequest) {

  // Note: The newer 'basic-card' format is supported in Samsung Internet Beta v5.4.
  // This previous format is still supported and will also work in v5.0.
  // Note: These are example payment networks. Others are available. 
  var methodData = [{supportedMethods: ['visa', 'mastercard', 'amex']}];

  var details = {total: {label: 'Something that costs money', amount: {currency: 'GBP', value: '9.99'}}};

  // Show a Payment Request UI and handle the result
  new PaymentRequest(methodData, details)
    .show()
    .then(function(uiResult) {
      processPayment(uiResult);
    })
    .catch(function(error) {
      handlePaymentError(error);
    });

} else {
  // Use a legacy checkout method for browsers without support
}
```

## Adding Samsung Pay support

Samsung Pay is accepted virtually anywhere you can swipe or tap your card with MSD and NFC support. 
Samsung Pay makes transactions super easy — pay with just your fingerprint. To accept Samsung Pay 
payments on your webpage, check back soon for more information about this integration. 

## Demos

* [Simple example](https://samsunginter.net/examples/payment-request-demo-simple/)
* [Example with additional options](https://samsunginter.net/examples/payment-request-demo-options/)

## Browser support

Payment Request API support was introduced in Samsung Internet v5.0. 

The 'basic-card' format was introduced in Samsung Internet v5.4 beta. [See here](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/IYRjdUKxCoM/8B-jp4g9AgAJ) for further details.

## Further resources

* ["How to take payments on the web with the Payment Request API"](https://medium.com/samsung-internet-dev/how-to-take-payments-on-the-web-with-the-payment-request-api-a523f6fc7c1f)
* ["Payment Request API: an Integration Guide" (Chrome Developers)](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/)
