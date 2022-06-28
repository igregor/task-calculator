# Task calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author

Grzegorz Wojtanowicz <g.wojtanowicz@gmail.com>

Linkedin: https://www.linkedin.com/in/grzegorz-w-70270529/

## Demo

https://ee.igregor.pl/

## Task Theme

### Colors

- blue: `#1795d4`
- yellow: `#fed800`
- light gray: `#f5f5f5`
- dark gray: `#373d45`

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve:build`

Serves your production build. Please run `yarn build` before.

## TODO

Known issues to be solved:

- handle floating point, e.g. `0.1 + 0.2 =`

  > read more:
  >
  > https://stackoverflow.com/questions/588004/is-floating-point-math-broken
  >
  > https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript

- errors handling, e.g. `can't divide with 0`
