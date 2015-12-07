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
        <section>
          <h3>Your Order</h3>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Product</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Total</td>
              </tr>
              <tr>
                <td>Game Console 2015</td>
                <td>1</td>
                <td>$500.00</td>
                <td>$500.00</td>
              </tr>
              <tr>
                <td>Platformer Bros 3D</td>
                <td>1</td>
                <td>$50.00</td>
                <td>$50.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>$550.00</td>
              </tr>
            </tbody>
          </table>
          <Input type="checkbox" label="Is your order correct?" />
        </section>
        <ButtonInput type="submit" value="Pay Now" className="pull-right" />
      </form>
    );
  }

});

ReactDOM.render(<CheckoutForm />, document.querySelector('#form-container'));