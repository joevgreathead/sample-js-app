# Sample JS App

This is a sample JS app to show off a few things like npm usage and app structure.

## What led here?

Running the following:

```bash
# everything from previous steps, plus...
# install the react libraries
~/sample-js-app > npm add react
~/sample-js-app > npm add react-dom
# install babel libraries, which are used to transpile react into js
~/sample-js-app > npm add -D babel-loader @babel/preset-react
```

- Add react libraries required to start running and building things using React.
- Add Babel libraries required to turn React code into js.
- Add webpack configuration to send React code through Babel.
- Add Babel configuration to package.json.
- Add some new React code in the form of ReactDOM.render which puts our App component on the page when the page loads.
- Add a very simple App component which is the start of our application.

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