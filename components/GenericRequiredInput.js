let React = require('react');
let Input = require('react-bootstrap').Input;

const GenericRequiredInput = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  validate() {
    return this.refs.input.getValue().length > 0;
  },

  validationState() {
    return this.validate() ? 'success' : 'error';
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue(),
    });
    this.updateStyles();
  },

  updateStyles() {
    this.setState({
      help: this.validate() ? '' : 'Required',
      bsStyle: this.validationState()
    });
  },

  render() {
    let optionalProps = {};
    if (this.state.help) optionalProps.help = this.state.help;
    if (this.state.bsStyle) optionalProps.bsStyle = this.state.bsStyle;

    return (
      <Input
        type={this.props.type}
        value={this.state.value}
        placeholder={this.props.placeholder}
        label={this.props.label}
        autoComplete={this.props.autoComplete}
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        onChange={this.handleChange}
        {...optionalProps} />
    );
  }

});

module.exports = GenericRequiredInput;

