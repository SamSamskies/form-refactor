module.exports = function(helpText) {

  const RequiredInputMixin = {

    getInitialState() {
      return {
        value: ''
      };
    },

    getValue() {
      return this.refs.input.getValue();
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
        help: this.validate() ? '' : helpText,
        bsStyle: this.validationState()
      });
    }

  };

  return RequiredInputMixin;

};