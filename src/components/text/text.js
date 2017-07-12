define(function(require){

  var React = require('../../libs/react/react');

  var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Всем привет, я компонент App!
      </div>
    );
  }
});
  

  

  return App;

});