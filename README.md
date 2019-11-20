# MyMoney Demo Launcher
Allows the selection of proper FNUI demos for various applicant scenarios. Supports localized versions.

## URL Parameters
- **?reset**

E.g. https://mymoney.url/?reset will clear language and other settings and reload the app. This will not exit development/testing mode.

- **?locale=[ISO_Country_code]**

E.g. https://mymoney.url/?locale=US will set the locale to USA and update any existing cookies

- **?invision**

E.g. https://mymoney.url/?invision will load the app in InVision mode. Locales which have InVision mockups set in the country data file will launch InVision demos instead of actual FNUI instances.

There are numerous visual clues to indicate that the app is running in this mode.

The app will remain in InVision mode until reset with ?reset or ?noinvision

- **?noinvision**

You can use this parameter to exit InVision mode but keep other app settings such as the locale.

- **?dev**

This will set a cookie in the browser to indicate the app is in development or testing mode. Use this to prevent usage tracking and skewing analytics data due to internal traffic.

A small indicator will be shown next to the app logo.

- **?nodev**   

If you wish to exit testing mode (for example if you're previewing Google Analytics settings), you can do so with ?nodev but remember to reactivate it once you're done.
