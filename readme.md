# Uptimerobot-js

The **Uptimerobot-js** is an unofficial node/browser javascript sdk for the Uptimerobot API written in Typescript.

**Note**: When using in the browser, please remember that your API Key will likely be exposed. It is therefore recommended that only the monitor-specific api key is used in this instance.

**Note**: This software is not affliated with Uptime Robot Service Provider Ltd. Issues and/or support should relating to this library be directed to the project's [issue tracker](https://github.com/jimleuk/uptimerobot-js/issues).

## Installation
```
npm i uptimerobot-js --save
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

## LICENCE

MIT

## Todo
**Publishing**
- [ ] push to NPM as a public accessible module

**Tests**  
- [ ] Unit tests for conversion helper functions
- [ ] Integration tests with api

**Documentation**
- [ ] **Write up documentation**
  - [ ] Account
  - [ ] AlertContact
  - [ ] Monitor
  - [ ] MWindow
  - [ ] PSP
- [ ] Api documentation site using a gatsbyJS/svelteJS site
- [ ] Host documentation site on github pages.

**Development**
- [x] **Conversion of API values**
  - [x] ~~**Boolean values**~~  
    ~~Api uses Integers "1" and "0" to set flags. Client should convert these to Boolean values and convert again to integers when outbound.~~
  - [x] ~~**Dates**~~  
    ~~Api returns dates as unix timestamps or "HH:mm". Client should convert these to javascript dates when appropriate and convert them back to string when outbound.~~
  - [x] ~~**Lists of ids (arrays)**~~  
    ~~Api uses hyphen-delimited strings for lists of ids. Client should accept an convert to array instead and convert again back to hyphen-delimited when outbound.~~