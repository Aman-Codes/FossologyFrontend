# FossologyFrontend

The new FOSSology frontend created with Angular

## Requirements

Your machine should have [Node.js](https://nodejs.org/en/download/), [Npm](https://www.npmjs.com/get-npm)(or [Yarn](https://classic.yarnpkg.com/en/docs/install)), and [Angular CLI](https://www.npmjs.com/package/@angular/cli) installed to use it locally.

## Pre Installation Steps

The frontend code will run on `http://localhost:4200` and backend code will be running on `http://localhost/repo/` if installed from source. So, it may lead to CORS Error.

```php
function cors() {
    
  // Allow from any origin
  if (isset($_SERVER['HTTP_ORIGIN'])) {
      // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
      // you want to allow, and if so:
      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');    // cache for 1 day
  }
  
  // Access-Control headers are received during OPTIONS requests
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
      
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
          // may also be using PUT, PATCH, HEAD etc
          header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
      
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
          header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  
      exit(0);
  }
}

cors();
```

1. Add the above function in FOSSology backend and then rebuild it.

**Note:** The above function will allow access from all origin and should not be used in production

2. Run the FOSSology backend server

3. Generate a [JWT token](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#json-web-token-jwt) and add it in `src\environments\environment.ts` file

## Installation 

Run `npm install` to install all the depenedncies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
