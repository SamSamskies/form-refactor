let _ = require('underscore');
let React = require('react');
let ReactDOM = require('react-dom');
let Input = require('react-bootstrap').Input;
let ButtonInput = require('react-bootstrap').ButtonInput;
let GenericRequiredInput = require('./components/GenericRequiredInput');
let EmailInput = require('./components/EmailInput');

const CheckoutForm = React.createClass({

  validate(e) {
    e.preventDefault();
    let allGood = _.reduce(this.refs, (memo, r) => {
      r.updateStyles();
      return memo && r.validate();
    }, true);

    let message = allGood ? 'Success. Thank you.' : 'Please complete all necessary information.';
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
        <ButtonInput type="submit" value="Pay Now" className="pull-right" />
      </form>
    );
  }

});

ReactDOM.render(<CheckoutForm />, document.querySelector('#form-container'));