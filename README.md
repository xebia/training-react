# Training React
## Setup
### Installation
``` sh
npm install
```

### Running
``` sh
# Start webpack-dev-server for development or viewing the examples
npm start

# Make minified build and serve that
npm run serve

# Run tests
npm test

# Run tests on file change
npm run test:watch

# Lint code
npm run lint

# Create a minified build
npm run build
```

## About
Each folder contains an example or an exercise. There are no dependencies between the separate folders. Webpack is used for transpilation of the files. There is intentionally no livereload of hot module replacement to make the code easy to read. However when `npm start` is running, only a page refresh is needed to see file changes.

## Exercise / examples

### Plain ES5 examples
Hello world:
- [http://localhost:3000/es5-nojsx-examples/helloworld.html](http://localhost:3000/es5-nojsx-examples/helloworld.html)
- [http://jsbin.com/vugafa/edit?html,js,output](http://jsbin.com/vugafa/edit?html,js,output)

Timer:
- [http://localhost:3000/es5-nojsx-examples/timer.html](http://localhost:3000/es5-nojsx-examples/timer.html)
- [http://jsbin.com/guyubo/edit?html,js,output](http://jsbin.com/guyubo/edit?html,js,output)

Shows that React can be used without any tooling like JS transpilation. The example itself can be opened without using NodeJS or npm. Open either [./src/es5-nojsx-examples/helloworld.html](./src/es5-nojsx-examples/helloworld.html) or [./src/es5-nojsx-examples/timer.html](./src/es5-nojsx-examples/timer.html) in a browser.

`helloworld.html` show the basics of creating a React component and has a loop. `timer.html` show a React component which uses state.


### ES6 examples with JSX
Hello world:
- [http://localhost:3000/?component=Es6JsxExampleHelloWorld](http://localhost:3000/?component=Es6JsxExampleHelloWorld)

Timer:
- [http://localhost:3000/?component=Es6JsxExampleTimer](http://localhost:3000/?component=Es6JsxExampleTimer)

Same examples as above using ES6 transpilation and JSX. It shows that React components can be written down much more concise and readable in JSX with ES6 compares to in plain ES5.

### Testing React views
Exercise to work with snapshot tests.

1. Implement the test in [./src/es6-jsx-examples/helloworld/__tests__/HelloWorldSpec.js](./src/es6-jsx-examples/helloworld/__tests__/HelloWorldSpec.js)
  - [./src/es6-jsx-examples/timer/__tests__/TimerSpec.js](./src/es6-jsx-examples/timer/__tests__/TimerSpec.js) can be used for inspiration


### JSX Exercise
[http://localhost:3000/?component=JsxExercise](http://localhost:3000/?component=JsxExercise)

Exercise to get familiar with building React components using JSX. The goal is to reproduce the page shown [here](https://v4-alpha.getbootstrap.com/examples/jumbotron/). The data structure for the contents of the page can be found in [./src/jsx-exercise/data.js](./src/jsx-exercise/data.js). The exercise has the following steps:

1. Identify the components the [exercise page](https://v4-alpha.getbootstrap.com/examples/jumbotron/) consists of
1. Build the components in the folder [./src/jsx-exercise/example-page/](./src/jsx-exercise/example-page/)
  - Put each component in a separate file
  - Use the data structure in [./src/jsx-exercise/data.js](./src/jsx-exercise/data.js)
  - Build the components using the stateless function notation
  - After you build some components manually you can use http://magic.reactjs.net/htmltojsx.htm
1. Add propType constraints

### Creating a React form
[http://localhost:3000/?component=ReactForm](http://localhost:3000/?component=ReactForm)

Exercise to work with stateful components in React. The state of the component is displayed on the page to make debugging easier.

1. Add form elements with name and value attributes to [./src/react-form/react-form/ReactFormPage.js](./src/react-form/react-form/ReactFormPage.js)
  - Add a name input and a gender input
  - Consider using a select input or a radio button
1. Add change handlers which call `setState` to the component. *NOTE:* make sure that `this` in the change handler point to the instance of the component.
1. Connect the change handlers to the form element

### React giphy search
[http://localhost:3000/?component=ReactGiphySearch](http://localhost:3000/?component=ReactGiphySearch)

Exercise to make an ajax call from React. The view and components are already available. The file to edit is [./src/react-giphy-search/giphy-search/GiphySearchPage.js](./src/react-giphy-search/giphy-search/GiphySearchPage.js).

1. Make sure the value of the searchTerm input box is part of the component state
1. Implement an `onSubmit` handler which calls `preventDefault`
1. Load the data from the `onSubmit` handler:
  - Call `searchGiphy` which is located in [./src/react-giphy-search/giphy-search/giphy-search-service.js](./src/react-giphy-search/giphy-search/giphy-search-service.js) to fetch a list of giphy's
  - `searchGiphy` returns a promise of the response of the backend. Inspect/log the data to determine how to use it.
  - If fetching the data fails the promise will be rejected with an `Error` instance
  - Use the `message` field in the state to display possible errors
  - Call `setState` in the `then` callback of the promise

### Testing reducers
Shows that reducers are easy to test because they are plain JS functions

1. Implement the tests that are not implemented in [./src/testing-reducers/__tests__/product-reducer-spec.js](./src/testing-reducers/__tests__/product-reducer-spec.js)
  - The action creators can be used in this test as well. This ensures when the action creators are updated the tests won't break. This also means that we are testing the action creators and the reducer in the same unit test. Note the action creator for this test are simple, if they were not simple it is best to test action creators and reducers separately.

### Connect redux to react
[http://localhost:3000/?component=ConnectReduxToReact](http://localhost:3000/?component=ConnectReduxToReact)

A redux store has been defined which will update its state with a random giphy. The goal is to connect this store to the provided view.

1. Use the [redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) to inspect the updating store
1. Connect redux to the app in [./src/connect-redux-to-react/app/App.js](./src/connect-redux-to-react/app/App.js) and [./src/connect-redux-to-react/random-image/RandomImagePage.js](./src/connect-redux-to-react/random-image/RandomImagePage.js)

### Implement the form actions and reducer in redux
[http://localhost:3000/?component=SimpleReduxFrom](http://localhost:3000/?component=SimpleReduxFrom)

1. Implement the store in [./src/simple-redux-from/app/store.js](./src/simple-redux-from/app/store.js)
1. Implement the actions in [./src/simple-redux-from/simple-form/simple-form-actions.js](./src/simple-redux-from/simple-form/simple-form-actions.js)
  **NOTE** you can use the spec in [./src/simple-redux-form/simple-form/__tests__/simple-form-reducer-spec.js](./src/simple-redux-form/simple-form/__tests__/simple-form-reducer-spec.js)

### Async action creator: Redux giphy search
[http://localhost:3000/?component=ReactGiphySearch](http://localhost:3000/?component=ReactGiphySearch)

Implement an async action creator to search for giphy's.

1. Implement `submitSearch` in [./src/redux-giphy-search/giphy-search/giphy-search-actions.js](./src/redux-giphy-search/giphy-search/giphy-search-actions.js)
  - It should immediately send a `SUBMIT_SEARCH` event
  - On a successful result send a `GIPHY_RESPONSE` event
  - On a failure response send a `GIPHY_ERROR` event

### Testing an async action creator

The goal of this exercise is to lean how to make asynchronous tests. It will also become clear that when a test is async it will be difficult to write.

1. Implement the empty tests in [./src/redux-giphy-search/giphy-search/__tests__/giphy-search-actions-spec.js](./src/redux-giphy-search/giphy-search/__tests__/giphy-search-actions-spec.js)
  - Use a `done` callback of mocha when the test is async
  - Use the provided `assertDispatchCall` to perform assertions on the n-th call of dispatch
  - `assertDispatchCall` returns a `dispatchMock`

### Reselect exercise

Reselect enables high performing calculated properties in redux. In this exercise we are going to calculate the total payload size of the giphy's shown in the giphy search exercise.

1. Create a getGiphyList select to get the giphyList out of the state
  - Can use plain JS
1. Create a getTotalGiphyPayloadSize which calculates the total payload size from the giphyList
  - Uses `createSelector`
  - Use this size: `giphy.images.original.mp4_size`
  - Consider using [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map) and [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  - Consider writing a unit test to develop the selector
1. Integrate `getTotalGiphyPayloadSize` in `mapStateToProps` in [./src/redux-giphy-search/giphy-search/GiphySearchPage.js](./src/redux-giphy-search/giphy-search/GiphySearchPage.js)
1. Add the total payload total to the view
  - Add `propType` validation for the new property

