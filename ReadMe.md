# Sample JS App

This is a sample JS app to show off a few things like npm usage and app structure.

## What led here?

Running the following:

```bash
# everything from previous steps, plus...
# install the react-router-dom library to enable multiple views
~/sample-js-app > npm add react-router-dom
```

- Add new view components which are containers for separate pages.
- Add routing to the App component which handles client side routing for the user to view different pages.
- Enable hot reload so changes trigger a page refresh.
- Configure webpack to make requests to views like /about fall back to the main route / so React handles the routing. (In production, the web server would be configured to do this by default when implementing an app like this.)

## Available Commands

```
npm run start
```

Starts the local web server.

```
npm run build
```

Builds a set of deployable assets including a JavaScript bundle and matching index.html.

## What comes after?

Check out the various branches in this repo for a step by step evolution of the project.
