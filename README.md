# Check
Check is a Angular web application which uses Server Side Rendering and shows user the SpaceX Launch Programs between year 2006 to 2020. It allows user to filter data according to Successful launch and Successful landing with the selected years.

## Used Engines and Technology version 
    node: "12.14.1"
    npm: "6.13.6"
    typescript: "~3.5.3"
    angular/cli: "~8.3.22"
    angular/compiler-cli: "~8.2.14"
    
 ## Folder structure
 
 ### Files and Folders to understand the project

 #### server.ts
      - The main file which contains the Backend code for this project. Uses Express framework to serve the requests.

 #### src
      - This folder contains all the front end code.
      
####  components are created under src/app/components
      -Below are the listed components used in front end development
      -description-card
      -landing-page

####  services are created under src/app/services
      -Below is the service used to call the APIs and share data between components
      -data-communication.service.ts

####  interceptors are created under src/app/interceptors
      -Belo are the interceptor files which intercepts the htpp requests at browser and at server end respectively.
      -browserstate.interceptor.ts
      -serverstate.interceptor.ts
 
 ```
 .
└── PS_CodingAssignment
    ├── angular.json
    ├── browserslist
    ├── e2e
    │   ├── protractor.conf.js
    │   ├── src
    │   │   ├── app.e2e-spec.ts
    │   │   └── app.po.ts
    │   └── tsconfig.json
    ├── gulpfile.js
    ├── karma.conf.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── report.20201017.104527.18581.0.001.json
    ├── report.20201017.104617.18878.0.001.json
    ├── report.20201017.105117.19394.0.001.json
    ├── report.20201017.105456.19462.0.001.json
    ├── report.20201017.110125.20521.0.001.json
    ├── report.20201017.110448.20803.0.001.json
    ├── Screenshots
    │   ├── local
    │   │   ├── 1_before optimization.png
    │   │   ├── 2_after transfer state optimization.png
    │   │   └── after compression and purify css optimization.png
    │   └── Other platform
    │       ├── heroku_desktop.png
    │       ├── heroku_mobile.png
    │       ├── mobile protrait view or tablet view.jpg
    │       ├── mobile view.jpg
    │       └── testwebpage.png
    ├── server.ts
    ├── src
    │   ├── app
    │   │   ├── app.component.html
    │   │   ├── app.component.scss
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.module.ts
    │   │   ├── app-routing.module.ts
    │   │   ├── app.server.module.ts
    │   │   ├── description-card
    │   │   │   ├── description-card.component.html
    │   │   │   ├── description-card.component.scss
    │   │   │   ├── description-card.component.spec.ts
    │   │   │   └── description-card.component.ts
    │   │   ├── interceptor
    │   │   │   ├── browserstate.interceptor.ts
    │   │   │   └── serverstate.interceptor.ts
    │   │   ├── landing-page
    │   │   │   ├── landing-page.component.html
    │   │   │   ├── landing-page.component.scss
    │   │   │   ├── landing-page.component.spec.ts
    │   │   │   └── landing-page.component.ts
    │   │   └── services
    │   │       ├── data-communication.service.spec.ts
    │   │       └── data-communication.service.ts
    │   ├── assets
    │   ├── environments
    │   │   ├── environment.prod.ts
    │   │   └── environment.ts
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── main.server.ts
    │   ├── main.ts
    │   ├── polyfills.ts
    │   ├── styles.scss
    │   └── test.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.server.json
    ├── tsconfig.spec.json
    ├── tslint.json
    └── webpack.server.config.js
```

## Mobile View, Tablet View and Desktop View of the application are as respectively

<img src="https://user-images.githubusercontent.com/25485584/97261567-18093a00-1845-11eb-90b1-4fe6d0911d46.png" width="200" height="400">
<img src="https://user-images.githubusercontent.com/25485584/97261570-19d2fd80-1845-11eb-94fb-7b9b57da6875.png" width="400" height="200">
<img src="https://user-images.githubusercontent.com/25485584/97261574-1b9cc100-1845-11eb-8b9d-1f7ad810bc87.png" width="600" height="300">


## Approach for developing the project

I have used the Agile methodology to develop the Web Application.

### 1. Sprint-1 :
   - In this sprint, I have tried to develop the backbone of the software.
     1. Web application should use Server Side Rendering(SSR) to deliver the page to the Client-Side.
     1. I have used Angular 8 and Angular universal which in turns uses the node.js & Express framework for SSR.

### 2. Sprint-2 :
   - In this sprint, I have tried to develop the UI and Functionality of the required web application.
     1. I have used Angular material and Angular flex-layout to develop the Responsive UI.
     1. Tested the application responsiveness and performance in development environment. 


### 3. Sprint-3 :
   - In this sprint, I have optimized the application and tested the core functionalities of the application for production ready.
     1. I have used the caching techinque to store the data of requested URL with memory-cache module {Key,value} = {Requested_url, response}.
     1. Used Angular's Transfer state to intercept the api call from client side.
     1. Used Purify Css to remove the dead Css and Compression npm module to send the compressed sized to the client.
     1. Generated the lighthouse report and tested the application on locaohost.

#### Screenshots of the lighthouse score after optimization with default filter Year=2006

#### After optimizing Transfer state using memory cache.
  <img alt="after compression and purify css optimization" src="https://user-images.githubusercontent.com/25485584/96479342-71c2a080-1256-11eb-9ff4-41e7b46195ac.png" width="500" height="100">
  
  
#### Screenshot of the lighthouse score without filter
<img alt="after compression and purify css optimization" src="https://user-images.githubusercontent.com/25485584/97445108-e8485800-1952-11eb-9639-276d17294e30.PNG" width="500" height="100">


### 4. Sprint-4 :
   - In this sprint, I have pushed my code to Github and deployed my application on heroku platform.
     1. Fixed bugs and deployed the applicaion connected with Github.
     1. Fixing bugs and testing the application in real-world.
     

## Actions that needs to perform after taking pull

Navigate to the repositiory and do `npm install`. This will install the required dependencies.  

## Development server

Run `npm run dev:serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build and Deployment

Run `npm run ssr:serve ` to build in production mode and serve the project. Navigate to `http://localhost:4200/`. The build artifacts will be stored in the `dist/` directory. 

## Running unit tests
Testcases for the components functionality are wriiten in their respective components.spec.ts file.
Total 6 testcases covered



