require('./TitleComponent.css');

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <h1 className='name'>Hello, {this.props.name}!</h1>
    );
  }
});
