let _ = require('underscore');
let React = require('react');
let Input = require('react-bootstrap').Input;
let GenericRequiredInput = require('./GenericRequiredInput');

const AddressSection = React.createClass({

  getInitialState() {
    return {
      isHidden: false
    };
  },

  validate() {
    if (this.state.isHidden) return true;
    return _.reduce(this.refs, (memo, r) => {
      r.updateStyles();
      return memo && r.validate();
    }, true);
  },

  toggleAddressFields(e) {
    this.setState({
      isHidden: e.target.checked
    });
  },

  render() {
    return (
      <section>
        <h3>{this.props.headerText}</h3>
        <Input type="checkbox" label={this.props.skipText} className={this.props.allowSkip ? '' : 'hidden' } onChange={this.toggleAddressFields} />
        <div className={this.state.isHidden ? 'hidden' : ''}>
          <GenericRequiredInput ref="fullName" type="text" label="Full Name" placeholder="Jane Doe" autoComplete="name" />
          <GenericRequiredInput ref="addressLine1" type="text" label="Address Line 1" placeholder="1234 Main St." autoComplete="address-line1" />
          <Input type="text" label="Address Line 2" placeholder="Ste 36" autoComplete="address-line2" />
          <GenericRequiredInput ref="city" type="text" label="City" placeholder="Anytown" autoComplete="locality" />
          <GenericRequiredInput ref="state" type="text" label="State/Province" placeholder="CA" autoComplete="region" />
          <GenericRequiredInput ref="postalCode" type="text" label="Postal Code" placeholder="123456" autoComplete="postal-code" />
          <GenericRequiredInput ref="country" type="text" label="Country" placeholder="USA" autoComplete="country-name" />
        </div>
      </section>
    );
  }

});

module.exports = AddressSection;
