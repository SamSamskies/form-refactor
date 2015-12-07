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
      let isValid = r.validate ? r.validate() : true;
      if (r.updateStyles) r.updateStyles();
      return memo && isValid;
    }, true);

    let message = allGood ? 'Success. Check the dev console for all your data.' : 'Please complete all necessary information.';
    alert(message);

    if (allGood) console.log(this.serialize())
  },

  serialize() {
    return {
      email: this.refs.email.getValue(),
      subscribe: this.refs.subscribe.getChecked(),
      shippingAddress: this.refs.shippingAddress.serialize(),
      billingAddress: this.refs.billingAddress.serialize(),
      creditCard: this.refs.creditCard.serialize()
    }
  },

  render() {
    return (
      <form onSubmit={this.validate}>
        <div className="panel panel-default">
          <div className="panel-body">
            <AddressSection ref="shippingAddress" headerText="Your Shipping Address" />
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <AddressSection ref="billingAddress" headerText="Your Billing Address" allowSkip="true" skipText="Same as shipping address" />
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <CreditCardSection ref="creditCard" />
          </div>
        </div>
        <div className="panel panel-default">
          <section className="panel-body">
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
          <ButtonInput type="submit" value="Pay Now" className="pull-right" />
          </section>
        </div>
      </form>
    );
  }

});

ReactDOM.render(<CheckoutForm />, document.querySelector('#form-container'));