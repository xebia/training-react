/* eslint-disable no-var, func-names, prefer-arrow-callback, prefer-template */
(function (window, document) {
  var React = window.React;
  var ReactDOM = window.ReactDOM;

  var div = React.DOM.div;
  var h1 = React.DOM.h1;
  var p = React.DOM.p;
  var ol = React.DOM.ol;
  var li = React.DOM.li;

  var HelloWorld = div(null,
    h1(null, 'Hello World!'),
    p(null, 'this is a paragraph'),
    p(null, 'Look at this list:'),
    ol(null,
       [1, 2, 3].map(function (number) {
         return li({ key: number }, 'item ' + number);
       })
    )
  );

  ReactDOM.render(HelloWorld, document.getElementById('app'));
}(window, document));
