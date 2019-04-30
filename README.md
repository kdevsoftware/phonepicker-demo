# PhonepickerDemo

[Demo](https://kdevsoftware.github.io/phonepicker-demo/)

```
Node: 10.15.3
npm: 6.9.0
Angular: 7.2.14
Angular CLI: 7.2.4
```

## Task List

- [x] Angular 6+ with Scss
- [x] It should be a custom form component using ​ControlValueAccessor
- [x] Extend or template Primeng dropdown: ​`https://www.primefaces.org/primeng/#/dropdown`
- [x] Integrate API for the list of countries: ​`https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;callingCodes`
- [x] libphonenumber-js​​ for validation
- [x] Insert the flag images to the dropdown option
- [x] Styling as the following image:
      ![alt text](https://github.com/kdevsoftware/phonepicker-demo/blob/master/mockup.png)

## Development server

```
$ git clone https://github.com/kdevsoftware/phonepicker-demo.git
$ cd phonepicker-demo
$ npm install
$ npm start
```

Navigate to `http://localhost:4200/`.

## Deploying to Github page

```
$ ng build --prod --aot --base-href "https://kdevsoftware.github.io/phonepicker-demo/"
$ sudo ngh
```

Navigate to `https://kdevsoftware.github.io/phonepicker-demo/`
