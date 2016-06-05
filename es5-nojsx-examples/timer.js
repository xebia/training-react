(function (window, document) {
  var React = window.React;
  var ReactDOM = window.ReactDOM;
  var RD = React.DOM;
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
      return RD.div(null,
        RD.h1(null, 'Hello World!'),
        RD.p(null, 'The time is ' + this.state.time)
      );
    },
  });


  ReactDOM.render(
    React.createElement(Timer),
    document.getElementById('app')
  );
}(window, document));
