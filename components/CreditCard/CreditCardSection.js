let _ = require('underscore');
let React = require('react');
let CreditCardNumberInput = require('./CreditCardNumberInput');
let CreditCardExpDateInput = require('./CreditCardExpDateInput');
let CreditCardCvvInput = require('./CreditCardCvvInput');

const CreditCardSection = React.createClass({

  validate() {
    return _.reduce(this.refs, (memo, r) => {
      let isValid = r.validate ? r.validate() : true;
      if (r.updateStyles) r.updateStyles();
      return memo && isValid;
    }, true);
  },

  toJSON() {
    return _.reduce(this.refs, (memo, v, k) => {
      memo[k] = v.getValue();
      return memo;
    }, {});
  },

  render() {
    return (
      <section>
        <h3>Your Credit Card Information</h3>
        <div className="cc-warning"><em>Note: don't enter any actual credit card info!</em></div>
        <CreditCardNumberInput ref="ccNum" label="Credit Card Number" placeholder="xxxx xxxx xxxx xxxx" />
        <CreditCardExpDateInput ref="expDate" label="Expiration Date" placeholder="MM/YYYY" />
        <CreditCardCvvInput ref="cvv" label="CVV" placeholder="123" />
      </section>
    );
  }

});

module.exports = CreditCardSection;
