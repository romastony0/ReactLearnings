// import logo from "./logo.svg";
// import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from "reactstrap";

function App() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center">
                Login
              </CardTitle>
              <Form>
                <FormGroup>
                  <Label for="inputEmail">Email address</Label>
                  <Input type="email" name="email" id="inputEmail" placeholder="Enter email" />
                  <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </FormGroup>
                <FormGroup>
                  <Label for="inputPassword">Password</Label>
                  <Input type="password" name="password" id="inputPassword" placeholder="Password" />
                </FormGroup>
                <Button color="primary" block>
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
