import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";

function Footer() {
  return (
    <div>
      <Row className="text-center align-items-center p-2">
        <Col>
          <Row>
            <Col xs="4">social 1</Col>
            <Col xs="4">social 2</Col>
            <Col xs="4">social 3</Col>
          </Row>
        </Col>
        <Col>
          <p>Copyright &#169; Sirena Alyce, LLC. 2021</p>
        </Col>
        <Col>
          <p>Cute saying</p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
