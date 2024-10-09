import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   <h1>Model Login Form</h1> 
      <Button variant="primary" onClick={handleShow}>
        
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN TO MY ACCOUNT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mt-3">
              <Form.Check type="checkbox" label="Remember Me On This Computer" />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mt-3">
              LOGIN
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="link" onClick={handleClose}>
            Forgot Your Password?
          </Button>
          <Button variant="link" onClick={handleClose}>
            Create A New Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginForm;
