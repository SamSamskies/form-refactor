let React = require('react');
let Input = require('react-bootstrap').Input;
let GenericRequiredInput = require('./GenericRequiredInput');

const AddressSection = React.createClass({

  render() {
    return (
      <section>
        <h3>{this.props.headerText}</h3>
        <GenericRequiredInput ref="fullName" type="text" label="Full Name" placeholder="Jane Doe" autoComplete="name" />
        <GenericRequiredInput type="text" label="Address Line 1" placeholder="1234 Main St." autoComplete="address-line1" />
        <Input type="text" label="Address Line 2" placeholder="Ste 36" autoComplete="address-line2" />
        <GenericRequiredInput type="text" label="City" placeholder="Anytown" autoComplete="locality" />
        <GenericRequiredInput type="text" label="State/Province" placeholder="CA" autoComplete="region" />
        <GenericRequiredInput type="text" label="Postal Code" placeholder="123456" autoComplete="postal-code" />
        <GenericRequiredInput type="text" label="Country" placeholder="USA" autoComplete="country-name" />
      </section>
    );
  }

});

module.exports = AddressSection;
