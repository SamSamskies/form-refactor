let React = require('react');
let Input = require('react-bootstrap').Input;

const FullNameInput = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  validationState() {
    return this.refs.input.getValue().length > 0 ? 'success' : 'error';
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue(),
      help: this.validationState() === 'error' ? 'Required' : '',
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
        placeholder="Jane Doe"
        label="Full Name"
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        onChange={this.handleChange}
        {...optionalProps} />
    );
  }

});

module.exports = FullNameInput;

