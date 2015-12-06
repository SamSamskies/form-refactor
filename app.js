let React = require('react');
let ReactDOM = require('react-dom');
let FullNameInput = require('./components/FullNameInput');

const form = (
  <form>
    <FullNameInput />
  </form>
);

ReactDOM.render(form, document.querySelector('#main'));