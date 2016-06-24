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
Each folder contains an example or an exercise. There are no dependencies between the separate folders. Webpack is used for transpilation of the files. There is intentionally no livereload of hot module replacement to make the code easy to read. However when `npm start` is running, only a page refresh is need to see file changes.

## Exercise / examples

### Plain ES5 examples
Hello world:
- [http://localhost:8080/es5-nojsx-examples/helloworld.html](http://localhost:8080/es5-nojsx-examples/helloworld.html)
- [http://jsbin.com/vugafa/edit?html,js,output](http://jsbin.com/vugafa/edit?html,js,output)

Timer:
- [http://localhost:8080/es5-nojsx-examples/timer.html](http://localhost:8080/es5-nojsx-examples/timer.html)
- [http://jsbin.com/guyubo/edit?html,js,output](http://jsbin.com/guyubo/edit?html,js,output)

Shows that React can be used without any tooling like JS transpilation. The example itself can be opened without using NodeJS or npm. Open either [./es5-nojsx-examples/helloworld.html](./es5-nojsx-examples/helloworld.html) or [./es5-nojsx-examples/timer.html](./es5-nojsx-examples/timer.html) in a browser.

`helloworld.html` show the basics of creating a React component and has a loop. `timer.html` show a React component which uses state.


### ES6 examples with JSX
Hello world:
- [http://localhost:8080/es6-jsx-examples/helloworld.html](http://localhost:8080/es6-jsx-examples/helloworld.html)

Timer:
- [http://localhost:8080/es6-jsx-examples/timer.html](http://localhost:8080/es6-jsx-examples/timer.html)

Same examples as above using ES6 transpilation and JSX. It shows that React components can be written down much more concise and readable in JSX with ES6 compares to in plain ES5.

### JSX Exercise
[http://localhost:8080/jsx-exercise/example-page.html](http://localhost:8080/jsx-exercise/example-page.html)

Exercise to get familiar with building React components using JSX. The goal is to reproduce the page shown [here](https://v4-alpha.getbootstrap.com/examples/jumbotron/). The data structure for the contents of the page can be found in [./jsx-exercise/data.js](./jsx-exercise/data.js). The exercise has the following steps:

1. Identify the components the [exercise page](https://v4-alpha.getbootstrap.com/examples/jumbotron/) consists of
1. Build the components in the folder [./jsx-exercise/example-page/](./jsx-exercise/example-page/)
  - Put each component in a separate file
  - Use the data structure in [./jsx-exercise/data.js](./jsx-exercise/data.js)
  - Enable `eslint` in your editor for fast feedback on possible errors
  - Build the components using the stateless function notation
  - After you build some components manually you can use http://magic.reactjs.net/htmltojsx.htm 
1. Add propType constraints

### Creating a React form
[http://localhost:8080/react-form/react-form.html](http://localhost:8080/react-form/react-form.html)

Exercise to work with stateful components in React. The state of the component is displayed on the page to make debugging easier.

1. Add form elements with name and value attributes to [./react-form/react-form/ReactFormPage.js](./react-form/react-form/ReactFormPage.js)
1. Add change handlers which call `setState` to the component. *NOTE:* make sure that `this` in the change handler point to the instance of the component.
1. Connect the change handlers to the form element

### React giphy search
[http://localhost:8080/react-giphy-search/giphy-search.html](http://localhost:8080/react-giphy-search/giphy-search.html)

Exercise to make an ajax call from React. The view and components are already available. The file to edit is [./react-giphy-search/giphy-search/GiphySearchPage.js](./react-giphy-search/giphy-search/GiphySearchPage.js).

1. Make sure the value of the searchTerm input box is part of the component state
1. Implement an `onSubmit` handler which calls `preventDefault`
1. Load the data from the `onSubmit` handler:
  - Call `searchGiphy` which is located in [./react-giphy-search/giphy-search/giphy-search-service.js](./react-giphy-search/giphy-search/giphy-search-service.js) to fetch a list of giphy's
  - `searchGiphy` returns a promise of the response of the backend. Inspect/log the data to determine how to use it.
  - If fetching the data fails the promise will be rejected with an `Error` instance
  - Use the `message` field in the state to display possible errors
  - Call `setState` in the `then` callback of the promise

### Testing reducers
Shows that reducers are easy to test because they are plain JS functions

1. Implement the tests that are not implemented in [./testing-reducers/__tests__/product-reducer-spec.js](./testing-reducers/__tests__/product-reducer-spec.js)
  - The action creators can be used in this test as well. This ensures when the action creators are updated the tests won't break. This also means that we are testing the action creators and the reducer in the same unit test. Note the action creator for this test are simple, if they were not simple it is best to test action creators and reducers separately.

### Connect redux to react
[http://localhost:8080/connect-redux-to-react/connect-redux-to-react.html](http://localhost:8080/connect-redux-to-react/connect-redux-to-react.html)

A redux store has been defined which will update its state with a random giphy. The goal is to connect this store to the provided view.

1. Use the [redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) to inspect the updating store
1. Connect redux to the app in [./connect-redux-to-react/app/App.js](./connect-redux-to-react/app/App.js) and [./connect-redux-to-react/random-image/RandomImagePage.js](./connect-redux-to-react/random-image/RandomImagePage.js)

### Create a form in redux
[http://localhost:8080/simple-redux-form/simple-redux-form.html](http://localhost:8080/simple-redux-form/simple-redux-form.html)

Functionally the same form as the plain react form, but with redux this time. This exercise demonstrates the difference in boilerplate between React and redux. However do note that in production you might want to use something like [redux-form](https://github.com/erikras/redux-form) to limit the required boilerplate in redux.

1. Create a redux store in `./simple-redux-from/app/store.js`
1. Create an empty `simple-form-reducer.js` in [./simple-redux-form/simple-form/](./simple-redux-form/simple-form/) and integrate it in the store
  - The reducer should have the initial state:
  ``` javascript
  {
    name: '',
    gender: '',
  }
  ```
  - The reducer should be integrated using `combineReducers` and have the key `form`.
1. Connect the [./simple-redux-form/simple-form/SimpleFormPage.js](./simple-redux-form/simple-form/SimpleFormPage.js) to the redux store to make sure there are no propTypes errors
1. Create `simple-form-actions.js` to send new values for `name` and `gender` to redux
1. Use mapDispatchToProps and bindActionCreators to create change handler for the for fields
1. Connect the change handlers to the form fields
1. Verify that the view updates when the form is updated

### Redux giphy search
[http://localhost:8080/redux-giphy-search/giphy-search.html](http://localhost:8080/redux-giphy-search/giphy-search.html)

Implement an async action creator to search for giphy's. 

1. Implement `submitSearch` in [./redux-giphy-search/giphy-search/giphy-search-actions.js](./redux-giphy-search/giphy-search/giphy-search-actions.js)
  - It should immediately send a `SUBMIT_SEARCH` event
  - On a successful result send a `GIPHY_RESPONSE` event
  - On a failure response send a `GIPHY_ERROR` event

### Testing an async action creator

The goal of this exercise is to lean how to make asynchronous tests. It will also become clear that when a test is async it will be difficult to write.

1. Implement the empty tests in [./redux-giphy-search/giphy-search/__tests__/giphy-search-actions-spec.js](./redux-giphy-search/giphy-search/__tests__/giphy-search-actions-spec.js)
  - Use a `done` callback of mocha when the test is async
  - Use the provided `assertDispatchCall` to perform assertions on the n-th call of dispatch
  - `assertDispatchCall` returns a `dispatchMock`

### Reselect exercise

Reselect enables high performing calculated properties in redux. In this exercise we are going to calculate the total payload size of the giphy's shown in the giphy search exercise.

1. Create a getGiphyList select to get the giphyList out of the state
  - Can use plain JS
1. Create a getTotalGiphyPayloadSize which calculates the total payload size from the giphyList
  - Uses `createSelector`
  - Use this size: `giphy.images.original.mp4`_size
  - Consider using [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map) and [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  - Consider writing a unit test to develop the selector
1. Integrate `getTotalGiphyPayloadSize` in `mapStateToProps` in [./redux-giphy-search/giphy-search/GiphySearchPage.js](./redux-giphy-search/giphy-search/GiphySearchPage.js)
1. Add the total payload total to the view
  - Add `propType` validation for the new property

