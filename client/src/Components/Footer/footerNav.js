import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <div>
      <Container id="footernav">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Link className="bottomnav" to="/">
              HOME
            </Link>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Link className="bottomnav" to="/getinvolved">
              GET INVOLVED
            </Link>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Link className="bottomnav" to="/ourteam">
              OUR TEAM
            </Link>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Link className="bottomnav" to="/contact">
              CONTACT US
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
