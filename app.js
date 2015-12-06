let React = require('react');
let ReactDOM = require('react-dom');
let FullNameInput = require('./components/FullNameInput');
let EmailInput = require('./components/EmailInput');

const form = (
  <form>
    <FullNameInput label="Full Name" placeholder="Jane Doe" />
    <EmailInput label="Email Address" placeholder="jane@example.com" />
  </form>
);

ReactDOM.render(form, document.querySelector('#main'));