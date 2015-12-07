let React = require('react');
let CreditCardNumberInput = require('./CreditCardNumberInput');
let CreditCardExpDateInput = require('./CreditCardExpDateInput');
let CreditCardCvvInput = require('./CreditCardCvvInput');

const CreditCardSection = React.createClass({

  render() {
    return (
      <section>
        <h3>Your Credit Card Information</h3>
        <div className="cc-warning"><em>Note: don't enter any actual credit card info!</em></div>
        <CreditCardNumberInput label="Credit Card Number" placeholder="xxxx xxxx xxxx xxxx" />
        <CreditCardExpDateInput label="Expiration Date" placeholder="MM/YYYY" />
        <CreditCardCvvInput label="CVV" placeholder="123" />
      </section>
    );
  }

});

module.exports = CreditCardSection;
