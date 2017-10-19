# NativeNodeExpressFirebase - NNERF

## Setup .env File for Development
You need to setup a .env file to run. The env file is being used by both server and app.

```
  API_URL=localhost:3000/api
  DB_HOST=<YOUR_FIREBASE_DB_URL>
  SERVICE_ACCOUNT=<SECRET_FILE_FROM_FIREBASE>
```

## Get Started
  * Set the node version by `nvm use`
  * Install node modules `yarn install`
  * Start the our server `node server.js`
  * Start the packager `react-native start`
  * Finally run iOs `react-native run-ios`

## Dev tools:
  * Air bnb linting
  * Using prettier too
  * React native dev tools

## Coming up next
  * Finish the frontend.
  * Redux Actions
  * Alter component state. Save captures state, gives to redux & server
  * Hygiene work. Linting, proptypes.
  
