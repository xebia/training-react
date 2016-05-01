(function (window, document) {
  var React = window.React;
  var ReactDOM = window.ReactDOM;

  var div = React.DOM.div;
  var h1 = React.DOM.h1;
  var p = React.DOM.p;


  var Timer;


  function getState() {
    return {
      time: new Date(),
    };
  }

  Timer = React.createClass({
    getInitialState: getState,
    componentDidMount: function () {
      this.interval = window.setInterval(this.updateState, 500);
    },
    updateState: function () {
      this.setState(getState());
    },
    componentDidUnMount: function () {
      window.clearInterval(this.interval);
    },
    render: function () {
      return div(null,
        h1(null, 'Hello World!'),
        p(null, 'The time is ' + this.state.time)
      );
    },
  });


  ReactDOM.render(
    React.createElement(Timer),
    document.getElementById('app')
  );
}(window, document));
