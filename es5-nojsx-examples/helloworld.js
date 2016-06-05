(function (window, document) {
  var React = window.React;
  var ReactDOM = window.ReactDOM;

  var RD = React.DOM;

  var HelloWorld = RD.div(null,
    RD.h1(null, 'Hello World!'),
    RD.p(null, 'this is a paragraph'),
    RD.p(null, 'Look at this list:'),
    RD.ol(null,
       [1, 2, 3].map(function (number) {
         return RD.li({ key: number }, 'item ' + number);
       })
    )
  );

  ReactDOM.render(HelloWorld, document.getElementById('app'));
}(window, document));
