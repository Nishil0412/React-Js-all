import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <h1>Model Registration Form</h1>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>CREATE AN ACCOUNT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="User Name" placeholder="User Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Control type="Profession" placeholder="Profession" />
            </Form.Group>

            <Form.Group controlId="formBasicPhoneNumber" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="Phone Number" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group controlId="formBasicOrganization" className="mt-3">
              <Form.Label>Organization</Form.Label>
              <Form.Control type="Organization" placeholder="Organization" />
            </Form.Group>
            <Form.Group controlId="formBasicDesignation" className="mt-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="Designation" placeholder="Designation" />
            </Form.Group>
            <Form.Group controlId="formBasicCity" className="mt-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="City" placeholder="City" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="Confirm Password" placeholder="Password" />
            </Form.Group>

            

            <Button variant="warning" type="submit" className="w-100 mt-3">
              SIGN UP
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="link" onClick={handleClose}>
            Already Have An Account?
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginForm;
