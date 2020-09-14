import React, { useState } from "react";
import { Jumbotron, Row, Col, Modal } from "react-bootstrap";
import FooterNav from "./footerNav";
import PrivacyPolicy from "../PrivacyPolicy/privacyPolicy";
import "./footer.css";
import mozilla from "../../Partners/mozilla.svg";
// import stopHateForProfit from "../../Partners/stop-hate-for-profit.svg";
// import stanford from "../../Partners/stanford.svg";
// import startup from "../../Partners/startup.svg";
import twitter from "../../SocialIcons/twitter.svg";
import facebook from "../../SocialIcons/facebook.svg";
import instagram from "../../SocialIcons/instagram.svg";

export default function Footer() {
  // const year = document.write(new Date().getFullYear());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Jumbotron className="sitefooter">
        <h2 id="proudpartners">Launched at</h2>
        <Row id="partners">
          {/* <Col xs={12} sm={12} md={4} lg={4}>
            <a href="https://www.mozilla.org/en-US/"><img className="partner" src={mozilla} alt="Mozilla" /></a>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
          <a href="https://www.stophateforprofit.org/">
            <img
              className="partner"
              src={stopHateForProfit}
              alt="Stop Hate for Profit"
            />
          </a>
          </Col> */}
          <Col xs={12} sm={12} md={12} lg={12}>
            <img className="partner" id="mozillabuilder" src={mozilla} alt="Y Startup School" />
          </Col>
          {/* <Col xs={12} sm={12} md={12} lg={12}>
            <img className="partner" src={stanford} alt="Stanford" />
          </Col> */}
        </Row>
        <FooterNav />
        <a href="https://twitter.com/Jo_TheFish">
          <img className="socialicon" src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/jo.thefish.sw">
          <img className="socialicon" src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/jo.thefish/">
          <img className="socialicon" src={instagram} alt="Instagram" />
        </a>
        <br />
        <p id="copywrite">
          © JoTheFish. All rights reserved.{" "}
          <text id="privacyPolicy" onClick={handleShow}>
            Privacy Policy.
          </text>
        </p>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Jo the Fish Privacy Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PrivacyPolicy />
          </Modal.Body>
        </Modal>
      </Jumbotron>
    </div>
  );
}
