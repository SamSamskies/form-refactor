let React = require('react');
let Input = require('react-bootstrap').Input;

const EmailInput = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  validate() {
    return this._isValidEmail();
  },

  validationState() {
    if (this._isValidEmail()) return 'success';
    if (!this._hasValue()) return 'error';
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue(),
      help: this.validationState() === 'error' ? 'Invalid email' : '',
      bsStyle: this.validationState()
    });
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
        onChange={this.handleChange}
        {...optionalProps} />
    );
  },

  _hasValue() {
    return this.refs.input.getValue().length > 0;
  },

  _isValidEmail() {
    let email = this.refs.input.getValue();
    return require('email-validator').validate(email);
  }

});

module.exports = EmailInput;

