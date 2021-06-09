# aggie-react
Aggie but with a react front-end.

## Getting Started

#### Install Front-end Dependencies
In order to start developing with aggie-react, cd into the `Aggie-React/aggie-pwa/` folder and run:

    npm install

#### Install Backend Dependencies
In addition, cd into the `Aggie-React/express-test/` folder and run:

    npm install
    
#### Start Front-end
In order to start the aggie-react front-end, cd into the `Aggie-React/aggie-pwa/` folder and run:
    
    npm start
    
This should open up a browser at the url localhost:3006, but if not go to localhost:3006 on your own. 
The front-end will work, but there will not be data provided to the front-end so everything will be empty. In order to fill the front-end with data, 
you need to start the backend.

#### Start Test Backend

In order to start the pseudo backend, cd into the `Aggie-React/express-test/` and run:

    npm start
    
This will serve static data using the same API endpoints as the real Aggie. YOU CANNOT RUN THE TEST BACKEND AND AGGIE AT THE SAME TIME. 
They use the same port so they will conflict. 

#### Start Aggie Backend

If you want to use the real aggie as the backend, start Aggie normally. Go to localhost:3000 and login to Aggie. On the same browser, open localhost:3006.
Because you have authenticated using the same browser, Aggie-React can use the API endpoints of the original aggie front-end. 

## Backend
Currently the Aggie-react front-end is being built out by proxying into either:

### Original aggie back-end

The way this works is that the Aggie-React is hosted on localhost:3006 and proxies into the Aggie back-end at localhost:3000. 
This allows us to literally use Aggie's original API endpoints. You can see the line of code that creates this proxy in aggie-pwa/package.json. 
We currently use cross-env to change the port of the front-end because cross-env is crossplatform. This proxy may suffer from problems on windows/linux. 
Please let me know if it does. 

```
  "scripts": {
    "start": "cross-env PORT=3006 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
  },
  "proxy": "http://localhost:3000",
```

### Running a test express server with spoofed API endpoints.

This works by having a hardcoded express server with static data that matches the API endpoints of the original Aggie Back-end. I made this because it's much more portable than the Actual
aggie backend. This also runs on localhost:3000. You can find the spoofed data in the json files located in `Aggie-React/express-test/` and you can find the spoofed API
endpoints in the `Aggie-React/express-test/index.js`. Feel free to add API endpoints and spoofed data so long as they match Aggie's original backend.
