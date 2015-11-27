var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;

const test = (
  <Button bsStyle="primary">Primary</Button>
);

ReactDOM.render(test, document.querySelector('#test'));