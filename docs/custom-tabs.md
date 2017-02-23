---
title: Custom tabs (Android)
layout: page
---
A custom tab provides an optimised way to launch web content from a native Android app.
Compared to implementing a Web View, or switching context to the browser app, it's quicker
and provides a more seamless experience.

<img src="/images/docs/custom-tab.png" width="400px" alt="Custom tab demo"/>

## Sample code

It is possible to specify a Samsung Internet custom tab by setting the package name
`com.sec.android.app.sbrowser` on your `Intent`. However, please note that harcoding a 
specific browser is not advised.

The recommended approach is to check which apps the user has which can fulfil the Intent
 and hopefully find one that’s been chosen as the default. 

The [code sample here](https://github.com/SamsungInternet/examples/tree/master/custom-tab-demo) 
demonstrates this approach. Here is an extract:

```java
Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(urlToLoad));

String packageName = CustomTabHelper.getPackageNameToUse(ctx, urlToLoad);

// If custom tab support, otherwise should fallback to simply opening in the browser
if (packageName != null) {

  intent.setPackage(packageName);

  Bundle extras = new Bundle();
  // Used to match session. Even if not used, has to be present with null to launch custom tab
  extras.putBinder(CUSTOM_TABS_EXTRA_SESSION, session);
  // Add the referrer
  extras.putParcelable(Intent.EXTRA_REFERRER, Uri.parse(Intent.URI_ANDROID_APP_SCHEME + "//" + ctx.getPackageName()));

  intent.putExtras(extras);

}

customTabButton.setOnClickListener(new View.OnClickListener() {
  public void onClick(View v) {
    startActivity(intent);
  }
});
```

## Browser support

Custom tab support was introduced in Samsung Internet v4.0.

## Further resources

* ["Custom tabs for Samsung Internet"](https://medium.com/samsung-internet-dev/custom-tabs-for-samsung-internet-8563e4754b22)
* [Web development guide](http://developer.samsung.com/internet/android/web-guide)
