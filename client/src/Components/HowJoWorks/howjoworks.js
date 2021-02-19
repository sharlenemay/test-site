import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./howjoworks.css";
import ExtensionImg from "../../Jo/extension-img.svg";
import ModalVideo from 'react-modal-video';

export default function HowJoWorks() {
  const [isOpen, setOpen] = useState(false)
  return (
    <Container className="howjoworks">
      <Row>
        <Col className="addPadding" id="extensionColumn">
          <img
            className="extensionimg"
            src={ExtensionImg}
            alt="google chrome extension"
          />
        </Col>
        <Col className="addPadding" xs={12} sm={12} md={6} lg={6}>
          <h2 className="howjoworksheading">How Jo Works</h2>
          <p>
            We help Jo's friends to make informed choices on the internet and in
            doing so, help revenue and profits to end up in the hands of
            companies that make the world a better place, sharing the facts of
            what the business is about or who is behind it.
          </p>
          <p>
            Start off by setting your preferences for what you want Jo to look
            out for, and Jo will react accordingly when you are browsing
            different websites.
          </p>
          <>
          <ModalVideo channel='youtube' isOpen={isOpen} autoplay videoId="TpL9aSqB-Ao" onClose={() => setOpen(false)} />
          <Button variant="primary" onClick={() => setOpen(true)} id="demoBtn">Watch Demo</Button>
          </>
        </Col>
      </Row>
    </Container>
  );
}