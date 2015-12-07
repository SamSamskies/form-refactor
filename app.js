let _ = require('underscore');
let React = require('react');
let ReactDOM = require('react-dom');
let Input = require('react-bootstrap').Input;
let ButtonInput = require('react-bootstrap').ButtonInput;
let GenericRequiredInput = require('./components/GenericRequiredInput');
let EmailInput = require('./components/EmailInput');
let CreditCardNumberInput = require('./components/CreditCardNumberInput');

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
        <h3>Your Shipping Address</h3>
        <GenericRequiredInput ref="fullName" type="text" label="Full Name" placeholder="Jane Doe" autoComplete="name" />
        <GenericRequiredInput type="text" label="Address Line 1" placeholder="1234 Main St." autoComplete="address-line1" />
        <Input type="text" label="Address Line 2" placeholder="Ste 36" autoComplete="address-line2" />
        <GenericRequiredInput type="text" label="City" placeholder="Anytown" autoComplete="locality" />
        <GenericRequiredInput type="text" label="State/Province" placeholder="CA" autoComplete="region" />
        <GenericRequiredInput type="text" label="Postal Code" placeholder="123456" autoComplete="postal-code" />
        <GenericRequiredInput type="text" label="Country" placeholder="USA" autoComplete="country-name" />
        <h3>Your Credit Card Information</h3>
        <div className="cc-warning"><em>Note: don't enter any actual credit card info!</em></div>
        <CreditCardNumberInput type="text" label="Credit Card Number" placeholder="xxxx xxxx xxxx xxxx" autoComplete="cc-number" />
        <ButtonInput type="submit" value="Pay Now" className="pull-right" />
      </form>
    );
  }

});

ReactDOM.render(<CheckoutForm />, document.querySelector('#form-container'));