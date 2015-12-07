let _ = require('underscore');
let React = require('react');
let Input = require('react-bootstrap').Input;
let RequiredInputMixin = require('./RequiredInputMixin');
let CreditCard = require('credit-card');

const CreditCardExpDateInput = React.createClass({

  mixins: [RequiredInputMixin('Invalid expiration date')],

  validate() {
    let [expMon, expYear] = this.refs.input.getValue().split('/');
    return CreditCard.isValidExpiryMonth(expMon) && CreditCard.isValidExpiryYear(expYear);
  },

  render() {
    let optionalProps = {};
    if (this.state.help) optionalProps.help = this.state.help;
    if (this.state.bsStyle) optionalProps.bsStyle = this.state.bsStyle;

    return (
      <Input
        type="text"
        value={this.state.value}
        placeholder={this.props.placeholder}
        label={this.props.label}
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        autoComplete="cc-exp"
        onChange={this.handleChange}
        {...optionalProps} />
    );
  }

});

module.exports = CreditCardExpDateInput;