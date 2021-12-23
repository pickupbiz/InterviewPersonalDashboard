import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

export const PersonalDashborad = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("");
  const onSubmit = (e) => {
    const per = { name, email, mobile, status };
    localStorage.setItem("person", JSON.stringify(per));
  };
  const onCancel = () => {
    console.log("Cancelled");
  };

  return (
    <React.Fragment>
      <Row>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Mobile
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                maxLength={8}
                placeholder="Mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group
              as={Row}
              className="mb-3"
              onChange={(e) => setStatus(e.target.value)}
            >
              <Form.Label as="legend" column sm={2}>
                Status
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  value="Inprogress"
                  label="Inprogress"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  value="OnHold"
                  label="OnHold"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Completed"
                  value="Completed"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Row>
            <Col lg={2}></Col>
            <Col lg={2}>
              <Button variant="primary" onClick={onSubmit}>
                Submit
              </Button>
            </Col>
            <Col lg={2}>
              <Button variant="primary" onClick={onCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </React.Fragment>
  );
};
