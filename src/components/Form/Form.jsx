import React, { useState } from "react";
import { Form, Col, Container, Button } from 'react-bootstrap'

const NewForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    contactViaSms: false
  });

  const handleChangeValue = key => event => setFormValues({
    ...formValues,
    [key]: event.target.value
  });

  const handleChangeCheckboxValue = key => event => setFormValues({
    ...formValues,
    [key]: event.target.checked
  });

  const handleClear = () => setFormValues({
    firstName: "",
    middleInitial: "",
    lastName: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    contactViaSms: false
  });

  const handleSubmit = () => {
    console.log(formValues);
    // Handle submit form data
    handleClear();
  }

  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First name</Form.Label>
            <Form.Control
              placeholder="First name"
              onChange={handleChangeValue("firstName")}
              value={formValues.firstName}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Middle Initial</Form.Label>
            <Form.Control
              onChange={handleChangeValue("middleInitial")}
              value={formValues.middleInitial}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last name</Form.Label>
            <Form.Control placeholder="Last name"
              onChange={handleChangeValue("lastName")}
              value={formValues.lastName}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              placeholder="Street Address"
              onChange={handleChangeValue("streetAddress")}
              value={formValues.streetAddress}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Address 2"
              onChange={handleChangeValue("addressLine2")}
              value={formValues.addressLine2}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="City"
              onChange={handleChangeValue("city")}
              value={formValues.city}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              placeholder="State"
              onChange={handleChangeValue("state")}
              value={formValues.state}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              placeholder="Zip code"
              onChange={handleChangeValue("zipCode")}
              value={formValues.zipCode}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChangeValue("email")}
              value={formValues.email}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder="Enter phone number"
              onChange={handleChangeValue("phoneNumber")}
              value={formValues.phoneNumber}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col}>
          <Form.Check type="checkbox" label="Contact me via SMS"
            onChange={handleChangeCheckboxValue("contactViaSms")}
            value={formValues.contactViaSms}
          />
        </Form.Group>
        <Button variant="secondary" onClick={handleClear}>Clear</Button>{' '}
        <Button onClick={handleSubmit}>Submit form</Button>
      </Form>
    </Container>
  )
};

export default NewForm;