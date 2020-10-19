# Check

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

### Used Engines 
    node: "12.14.1"
    npm: "6.13.6"
    typescript: "~3.5.3"
    angular/cli: "~8.3.22"
    angular/compiler-cli: "~8.2.14"

## After taking pull
Navigate to the repositiory and do `npm install`. This will install the required dependencies.  

## Development server

Run `npm run dev:serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build and Deployment

Run `npm run ssr:serve ` to build in production mode and serve the project. Navigate to `http://localhost:4200/`. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Approach for developing the project

I have used the Agile methodology to develop the Web Application.

### 1. Sprint-1 :
   - In this sprint, I have tried to develop the backbone of the software.
     1. Web application should use Server Side Rendering(SSR) to deliver the page to the Client-Side.
     1. I have used Angular 8 and Angular universal which in turns uses the node.js & Express framework for SSR.

### 1. Sprint-2 :
   - In this sprint, I have tried to develop the UI and Functionality of the required web application.
     1. I have used Angular material and Angular flex-layout to develop the Responsive UI.

### 1. Sprint-3 :
   - In this sprint, I have optimized the application and tested the core functionalities of the application for production ready.
     1. I have used the caching techinque to store the data of requested URL with memory-cache module {Key,value} = {Requested_url, response}.
     1. Used Angular's Transfer state to intercept the api call from client side.
     1. Used Purify Css to remove the dead Css and Compression npm module to send the compressed sized to the client.
     1. Generated the lighthouse report and tested the application  on locaohost.

### 4. Sprint-4 :
   - In this sprint, I have pushed my code to Github and deployed my application on heroku platform.
     1. Fixed bugs and deployed the applicaion connected with Github.
     1. Fixing bugs and testing the application in real-world.
