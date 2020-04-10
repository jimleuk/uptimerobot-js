# Uptimerobot-js

The **Uptimerobot-js** is an unofficial node/browser javascript sdk for the Uptimerobot API written in Typescript.

**Note**: When using in the browser, please remember that your API Key will likely be exposed. It is therefore recommended that only the monitor-specific api key is used in this instance.

**Note**: This software is not affliated with Uptime Robot Service Provider Ltd. Issues and/or support should relating to this library be directed to the project's [issue tracker](https://github.com/jimleuk/uptimerobot-js/issues).

## Installation
```
npm i uptimerobot-js --save

// or

yarn add uptimerobot-js
```
## Usage
The library is written in Typescript but compiled to vanilla JS so can be used in non-typescript supported environments such as the browser.
With Typescript however, developers can take full advantage of the library's comprehensive types and enums for safety.


```typescript
import Uptimerobot, { MonitorType } from 'uptimerobot-js'
const uptimerobot = new Uptimerobot('api_key...')

// getting a list of monitors by ID
const { monitors } = await uptimerobot.monitor.get({
  monitors: [0, 1, 2]
})

// create a Monitor with type of "all"
const response = await uptimerobot.monitor.create({
  // here, we can use the enum MonitorType provided by the library
  type: MonitorType.https,
})
```

## Why this library?

The official Uptimerobot API is interesting to say the least. It prefers a custom delimited string convention over standard objects for requests.
Take for example the following parameter for alert contacts when creating a new monitor.
```
alert_contacts: '457_0_0-373_5_0-8956_2_3'
```

> **From the official documentation**: ...where alert_contact>ids are seperated with - and threshold + recurrence are seperated with _. For ex: alert_contacts=457_5_0 refers to 457 being the alert_contact>id, 5 being the threshold and 0 being the recurrence...

**Uptimerobot-js** has painstakingly changed all the occurences and handles the conversion between this delimited string format and a developer-friendly interface using objects. The development experience improves drastically because there is no longer the need to keep referring back to the official docs, writing your own utility functions and developers can fully take advantage of the typings.

This is how the library handles the above:
```
alert_contacts: [
  { id: 457, threshold: 0, recurrence: 0 },
  { id: 373, threshold: 5, recurrence: 0 },
  { id: 8956, threshold: 2, recurrence: 3 },
]

// when the requests goes to the server, we convert this to `457_0_0-373_5_0-8956_2_3`
```

This conversion is not exclusive for requests, it also happens with responses. When the api sends back delimited format strings, this library will handle the conversion automatically.


## Configuration
The library is built on top of the [Axios](https://github.com/axios/axios) http library and exposes its complete config to be overwritten when the library is initialized.

For full config options, please refer to https://github.com/axios/axios#request-config
```typescript
const uptimerobot = new Uptimerobot('api_key...', {
  // eg. point to a dev server
  baseUrl: 'http://localhost:3000',
  // eg. increase timeout to 5 secs
  timeout: 5e3,
})
```

## Documentation

API documentation for this library is a TODO. Here is a high level view of the class object and available methods.
```
Uptimerobot {
  account
    list
  monitor
    get
    list
    create
    update
    delete
    reset
  alertContact
    get
    list
    create
    update
    delete
  mWindow
    get
    list
    create
    update
    delete
  psp
    get
    list
    create
    update
    delete
}
```
## Related

* [Official Uptimerobot API documentation](https://uptimerobot.com/api)
* [Unofficial Uptimerobot openAPI 3.0 documentation](https://github.com/jimleuk/uptimerobot-swagger)
* [Unofficial Uptimerobot API typescript type defintions only](https://github.com/jimleuk/uptimerobot-types)

## Licence

MIT

## Donate

A random charity appears!

**[Stamma](https://stamma.org)**  
The British Stammering Association, trading as Stamma is dedicated to creating a world where people who stammer are able to fulfil their potential and enjoy respect and consideration.

**Org**: British Stammering Association trading as Stamma, reg. charity no. 1089967/SCO38866  
**Donate**: https://stamma.org/join-us/donate-fundraise/donate
