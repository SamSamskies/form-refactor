let React = require('react');
let Input = require('react-bootstrap').Input;
let RequiredInputMixin = require('./RequiredInputMixin');

const EmailInput = React.createClass({

  mixins: [RequiredInputMixin('Invalid email')],

  validate() {
    let email = this.refs.input.getValue();
    return require('email-validator').validate(email);
  },

  render() {
    let optionalProps = {};
    if (this.state.help) optionalProps.help = this.state.help;
    if (this.state.bsStyle) optionalProps.bsStyle = this.state.bsStyle;

    return (
      <Input
        type="email"
        value={this.state.value}
        placeholder={this.props.placeholder}
        label={this.props.label}
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        autoComplete="email"
        onChange={this.handleChange}
        {...optionalProps} />
    );
  }

});

module.exports = EmailInput;

