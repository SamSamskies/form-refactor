let _ = require('underscore');
let React = require('react');
let ReactDOM = require('react-dom');
let ButtonInput = require('react-bootstrap').ButtonInput;
let FullNameInput = require('./components/FullNameInput');
let EmailInput = require('./components/EmailInput');

const CheckoutForm = React.createClass({

  validate(e) {
    e.preventDefault();
    let allGood = _.reduce(this.refs, (memo, r) => {
      return memo && r.validate();
    }, true);

    let message = allGood ? 'Success. Thank you.' : 'Please complete all necessary information.';
    alert(message);
  },

  render() {
    return (
      <form onSubmit={this.validate}>
        <FullNameInput ref="fullName" label="Full Name" placeholder="Jane Doe" />
        <EmailInput ref="email" label="Email Address" placeholder="jane@example.com" />
        <ButtonInput type="submit" value="Pay Now" className="pull-right" />
      </form>
    );
  }

});

ReactDOM.render(<CheckoutForm />, document.querySelector('#form-container'));