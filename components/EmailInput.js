let React = require('react');
let Input = require('react-bootstrap').Input;

const EmailInput = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  validate() {
    let email = this.refs.input.getValue();
    return require('email-validator').validate(email);
  },

  validationState() {
    return this.validate() ? 'success' : 'error';
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
    this.updateStyles();
  },

  updateStyles() {
    this.setState({
      help: this.validate() ? '' : 'Invalid email',
      bsStyle: this.validationState()
    });
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

