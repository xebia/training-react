(function (window, document) {
  var React = window.React;
  var ReactDOM = window.ReactDOM;

  var rd = React.DOM;

  var HelloWorld = rd.div(null,
    rd.h1(null, 'Hello World!'),
    rd.p(null, 'this is a paragraph'),
    rd.p(null, 'Look at this list:'),
    rd.ol(null,
       [1, 2, 3].map(function (number) {
         return rd.li({ key: number }, 'item ' + number);
       })
    )
  );

  ReactDOM.render(HelloWorld, document.getElementById('app'));
}(window, document));
