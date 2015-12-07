let _ = require('underscore');
let React = require('react');
let ReactDOM = require('react-dom');
let Input = require('react-bootstrap').Input;
let ButtonInput = require('react-bootstrap').ButtonInput;
let EmailInput = require('./components/EmailInput');
let CreditCardSection = require('./components/CreditCard/CreditCardSection');
let AddressSection = require('./components/AddressSection');

const CheckoutForm = React.createClass({

  validate(e) {
    e.preventDefault();
    let allGood = _.reduce(this.refs, (memo, r) => {
      r.updateStyles();
      return memo && r.validate();
    }, true);

    let message = allGood ? 'Success. Check the dev console for all your data.' : 'Please complete all necessary information.';
    alert(message);
  },

  render() {
    return (
      <form onSubmit={this.validate}>
        <EmailInput ref="email" label="Email Address" placeholder="jane@example.com" />
        <Input type="checkbox" label="Put me on the mailing list" />
        <AddressSection headerText="Your Shipping Address" />
        <CreditCardSection />
        <AddressSection headerText="Your Billing Address" />
        <ButtonInput type="submit" value="Pay Now" className="pull-right" />
      </form>
    );
  }

});

ReactDOM.render(<CheckoutForm />, document.querySelector('#form-container'));