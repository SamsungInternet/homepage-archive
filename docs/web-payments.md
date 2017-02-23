---
title: Web Payments
layout: page
image: /images/header-images/payment-card.jpg
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

  // Configure the type of payments you wish to support, for example...
  var methodData = [{
      supportedMethods: ['basic-card'],
      data: {
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        supportedTypes: ['credit', 'debit']
      }
    }];

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

## Demos

* [Simple example](https://samsunginter.net/examples/payment-request-demo-simple/)
* [Example with additional options](https://samsunginter.net/examples/payment-request-demo-options/)

## Browser support

Payment Request API support was introduced in Samsung Internet v5.0.

## Further resources

* ["How to take payments on the web with the Payment Request API"](https://medium.com/samsung-internet-dev/how-to-take-payments-on-the-web-with-the-payment-request-api-a523f6fc7c1f)
