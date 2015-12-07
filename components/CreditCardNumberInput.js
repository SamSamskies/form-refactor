let _ = require('underscore');
let React = require('react');
let Input = require('react-bootstrap').Input;
let RequiredInputMixin = require('./RequiredInputMixin');
let CreditCard = require('credit-card');

const CreditCardNumberInput = React.createClass({

  mixins: [RequiredInputMixin('Invalid credit card number')],

  validate() {
    let ccNum = this.refs.input.getValue();
    let supportedCardTypes = ['VC', 'MC', 'AE', 'DC'];
    return _.find(supportedCardTypes, sct => CreditCard.isValidCardNumber(ccNum, sct));
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
        autoComplete="cc-number"
        onChange={this.handleChange}
        {...optionalProps} />
    );
  }

});

module.exports = CreditCardNumberInput;