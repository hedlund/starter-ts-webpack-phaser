# Yet Another Webpack & Phaser Starter

>A fork of my [Webpack Starter](https://github.com/hedlund/starter-webpack).

Including, but not limited to, the following:

* `webpack` (d'oh)
* `webpack-dev-server` for development & hot module reloading
* `babel` for ES6 transpiling, including stage 0 support
* `eslint` for code hygiene
* `mocha`, `chai` & `sinon` for testing
* `istanbul` for code coverage
* `phaser`, `pixi.js` and `p2` for the game engine
* `phaser-debug` for improved debugging

## Usage

| Command                 | Description                                 |
|-------------------------|---------------------------------------------|
| `npm start`             | Start a dev server.                         |
| `npm run server`        | Start a dev server.                         |
| `npm run server:reload` | Start a dev server with HMR enabled.        |
| `npm run build`         | Build the production version of the app.    |
| `npm run build:prod`    | Build the production version of the app.    |
| `npm run build:dev`     | Build the developement version of the app.  |
| `npm run test`          | Run the tests.                              |
| `npm run test:watch`    | Run the tests & watch for changes.          |
| `npm run test:coverage` | Run the test coverage analysis.             |
| `npm run lint`          | Lint the code.                              |

Hot Module Replacement doesn't really work with Phaser, so that isn't enabled by default when
starting a dev server.
