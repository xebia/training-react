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
- [http://localhost:8080/es5-nojsx-examples/helloworld.html](http://localhost:8080/es5-nojsx-examples/helloworld.html)
- [http://jsbin.com/vugafa/edit?html,js,output](http://jsbin.com/vugafa/edit?html,js,output)

- [http://localhost:8080/es5-nojsx-examples/timer.html](http://localhost:8080/es5-nojsx-examples/timer.html)
- [http://jsbin.com/guyubo/edit?html,js,output](http://jsbin.com/guyubo/edit?html,js,output)

Shows that React can be used without any tooling like JS transpilation. The example itself can be opened without using NodeJS or npm. Open either [./es5-nojsx-examples/helloworld.html](./es5-nojsx-examples/helloworld.html) or [./es5-nojsx-examples/timer.html](./es5-nojsx-examples/timer.html) in a browser.

`helloworld.html` show the basics of creating a React component and has a loop.
`timer.html` show a React component which uses state.


### ES6 examples with JSX
- [http://localhost:8080/es6-jsx-examples/helloworld.html](http://localhost:8080/es6-jsx-examples/helloworld.html)
- [http://localhost:8080/es6-jsx-examples/timer.html](http://localhost:8080/es6-jsx-examples/timer.html)

Same examples as above using ES6 transpilation and JSX. It shows that React components can be written down much more concise and readable in JSX with ES6 compares to in plain ES5.

### JSX Exercise
- [http://localhost:8080/jsx-exercise/example-page.html](http://localhost:8080/jsx-exercise/example-page.html)

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
- [http://localhost:8080/react-form/react-form.html](http://localhost:8080/react-form/react-form.html)

Exercise to work with stateful components in React. The state of the component is displayed on the page to make debugging easier.

1. Add form elements with name and value attributes to [./react-form/react-form/ReactFormPage.js](./react-form/react-form/ReactFormPage.js)
1. Add change handlers which call `setState` to the component. *NOTE:* make sure that `this` in the change handler point to the instance of the component.
1. Connect the change handlers to the form element

### React giphy search
- [http://localhost:8080/react-giphy-search/giphy-search.html](http://localhost:8080/react-giphy-search/giphy-search.html)

Exercise to make an ajax call from React. The view and components are already available. The file to edit is [./react-giphy-search/giphy-search/GiphySearchPage.js](./react-giphy-search/giphy-search/GiphySearchPage.js).

1. Make sure the value of the searchTerm input box is part of the component state
1. Implement an `onSubmit` handler which calls `preventDefault`
1. Load the data from the `onSubmit` handler:
  - Call `searchGiphy` which is located in [./react-giphy-search/giphy-search/giphy-search-service.js](./react-giphy-search/giphy-search/giphy-search-service.js) to fetch a list of giphy's
  - `searchGiphy` returns a promise of the response of the backend. Inspect/log the data to determine how to use it.
  - If fetching the data fails the promise will be rejected with an `Error` instance
  - Use the `message` field in the state to display possible errors
  - Call `setState` in the `then` callback of the promise

### Connect redux to react
- [http://localhost:8080/connect-redux-to-react/connect-redux-to-react.html](http://localhost:8080/connect-redux-to-react/connect-redux-to-react.html)

A redux store has been defined which will update its state showing random giphy. 


- [http://localhost:8080/simple-redux-form/simple-redux-form.html](http://localhost:8080/simple-redux-form/simple-redux-form.html)
- [http://localhost:8080/redux-giphy-search/giphy-search.html](http://localhost:8080/redux-giphy-search/giphy-search.html)
