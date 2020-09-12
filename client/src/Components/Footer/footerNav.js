import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <div>
      <Container id="footernav">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <a className="bottomnav" href="/">
              HOME</a>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <a className="bottomnav" href="/getinvolved">
              GET INVOLVED
            </a>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <a className="bottomnav" href="/ourteam">
              OUR TEAM
            </a>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <a className="bottomnav" href="/contact">
              CONTACT US
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
