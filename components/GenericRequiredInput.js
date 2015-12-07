let React = require('react');
let Input = require('react-bootstrap').Input;
let RequiredInputMixin = require('./RequiredInputMixin');

const GenericRequiredInput = React.createClass({

  mixins: [RequiredInputMixin('Required')],

  validate() {
    return this.refs.input.getValue().length > 0;
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

