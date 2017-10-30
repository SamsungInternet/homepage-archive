---
title: Web Payments
layout: page
image: /images/header-images/payment-card.jpg
description: Take payments on the web with the requestPayment API
redirect_from: "/payments"
---
Samsung Internet supports the [Payment Request API](https://www.w3.org/TR/payment-request/), providing
a consistent, easy-to-use and secure check-out experience.

## Card payments

There are [example projects here on Github](https://github.com/SamsungInternet/examples). Here is a simple extracted sample:

```javascript
if (window.PaymentRequest) {

  // To accept debit and credit card payments
  var methodData = [{supportedMethods: ['basic-card']}];

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

## Samsung Pay

Samsung Pay makes transactions super easy — pay with just your fingerprint, no CVV required! Samsung Pay uses secure tokenized payments, meaning that you do not have to handle sensitive credit card data. Samsung Pay is accepted virtually anywhere you can swipe or tap your card with [MST](https://www.samsung.com/us/support/answer/ANS00043865/) and NFC support.

Samsung Internet supports Samsung Pay as a payment method, subject to Samsung Pay availability by location. [See here for further details](https://medium.com/samsung-internet-dev/how-to-accept-samsung-pay-on-your-website-using-web-payments-c2fcd4d26c02) and [register your interest using this form](https://docs.google.com/forms/d/e/1FAIpQLScTMv4vlvgrmxk5CxoI6qFKki4Fdd9tig3jQQKowjLu6UKgAA/viewform).

## Demos

* [Simple example](https://samsunginter.net/examples/payment-request-demo-simple/)
* [Example with additional options](https://samsunginter.net/examples/payment-request-demo-options/)
* [Samsung Shop](https://github.com/SamsungInternet/samsung-shop)
* [Socks Megastore](https://github.com/SamsungInternet/examples/tree/master/socks-megastore)

## Browser support

Payment Request API support was introduced in Samsung Internet v5.0. The 'basic-card' format was introduced in Samsung Internet v5.4 ([see here for details of the change](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/IYRjdUKxCoM/8B-jp4g9AgAJ)).

The Payment Request API is also supported in many other major browsers, including Chrome, Opera and Edge.

Please note that the Payment Request API provides the user interface part of taking payments.
You will still need a suitable [payment gateway or payment processor](https://en.wikipedia.org/wiki/Payment_gateway)
to provide secure payment processing.

## Further resources

* ["How to take payments on the web with the Payment Request API"](https://medium.com/samsung-internet-dev/how-to-take-payments-on-the-web-with-the-payment-request-api-a523f6fc7c1f)
* ["Payment Request API: an Integration Guide" (Chrome Developers)](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/)
* [W3C Web Payments Wiki](https://github.com/w3c/webpayments/wiki)
* [W3C Payment Request FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
