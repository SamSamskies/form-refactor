let React = require('react');
let Input = require('react-bootstrap').Input;
let RequiredInputMixin = require('../RequiredInputMixin');

const CreditCardCvvInput = React.createClass({

  mixins: [RequiredInputMixin('Invalid CVV')],

  validate() {
    return /\d{3,4}/.test(this.refs.input.getValue());
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
        autoComplete="cc-csc"
        onChange={this.handleChange}
        {...optionalProps} />
    );
  }

});

module.exports = CreditCardCvvInput;