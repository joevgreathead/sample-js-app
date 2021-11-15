# Sample JS App

This is a sample JS app to show off a few things like npm usage and app structure.

Each branch in this repo is a next step in the path. After this comes `step-01`. Steps 2 and onwards branch in two different directions. Both have the value of:

- Fast reload or compilation of assets.
- Built in commands to build optimized, ready assets that can be deployed to a real server. (Some optimizations may still be needed for more complex apps.)
- `npm` and `webpack` style management of dependencies, assets, and build pipeline.

Branch path `-a`:

- Focuses on jQuery style applications.
- Useful for those familiar to more plain JavaScript style, jQuery usage, and using HTML/CSS directly.
- Can be deployed on just about any server without specific requirements because the output is optimized HTML and JS files.

Branch path `-b`:

- Focuses on React style "single page" application.
- Useful for more complex application style interfaces.
- Can be deployed to just about any server, but may require optimizations like proxying sub view requests to main "/" path.

## What led here?

Running the following:

```bash
# make the new directory
~/ > mkdir sample-js-app
#  move into the new directory
~/ > cd sample-js-app
~/sample-js-app > npm init
# Follow all the necessary prompts
~/sample-js-app > npm install
```

## What comes after?

Check out the various branches in this repo for a step by step evolution of the project.
