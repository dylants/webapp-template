# webapp-template

A template for a web application.

## Getting Started

Install Node (I recommend using [nvm](https://github.com/creationix/nvm)) and [yarn](https://yarnpkg.com). Specific versions of Node and Yarn are required, and can be found in the `package.json` file.

Install the dependencies:

```
$ yarn
```

To start the application (in development mode), run the following command:

```
$ yarn start
```

The application will then be viewable at: [http://localhost:3000](http://localhost:3000)

### Production

For production, run the following commands:

```
$ yarn build

...

$ yarn production
```

The application will be viewable on port 3000 (by default).

## Configuration

Configuration for the application is available within the `config/index.js` file.

## Tests

Tests are written along side the source files, and include `.test.` in the file name. To execute the tests, run the following command:

```
$ yarn test
```

To run the tests in watch mode:

```
$ yarn test:watch
```
