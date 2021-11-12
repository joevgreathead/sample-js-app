# Sample JS App

This is a sample JS app to show off a few things like npm usage and app structure.

## What led here?

Running the following:

```bash
# everything from previous steps, plus...
# install jquery
~/sample-js-app > npm add jquery
# install the webpack library
~/sample-js-app > npm add -D webpack
~/sample-js-app > npm add -D webpack-cli
# install a webpack plugin which will put src links in our html file for us
~/sample-js-app > npm add -D html-webpack-plugin
# install the web pack dev server to run builds locally and serve our site as if it was real
~/sample-js-app > npm add -D webpack-dev-server
~/sample-js-app > npm install
```

- Create a `src/template.html` file. This is the basis of our website. We'll either use JavaScript to build the interface dynamically (like with React) or add static HTML here to manipulate later.
- Write some code in `src/index.js` to do stuff to the page.
- Create a `webpack.config.js` file. This tells the `webpack-dev-server` and the `webpack` command what to do with our javascript and html files when developing locally and when building artifacts for production servers.
- Add some commands to `package.json` such as `build` and `start` which will build artifacts for production and start our local development server which produces our site locally.

## What comes after?

Check out the various branches in this repo for a step by step evolution of the project.