import React, {createRef, useRef} from "react";
import { Element } from 'react-scroll'
import { Jumbotron, Row, Col, Container, Button } from "react-bootstrap";
import "./styles.css";
import BlueJo from "../Jo/Jo-happy-blue-10-flat.svg";
import PartialJo from "../Jo/partial-jo.svg";
import Reactions from "../Components/JoReactions/reactions";
import HowJoWorks from "../Components/HowJoWorks/howjoworks";
import SignUpEarlyAccess from "../Components/WantEarlyAccess/wantEarlyAccess";
import downArrow from "../Jo/down_arrow.svg";
import whiteDownArrow from "../Jo/white_down_arrow.svg";
import { ScrollingProvider, SectionLink, Section } from "react-scroll-section";
import Monitor from "../Jo/monitor.svg";

export default function Landing() {

  const scrollToBottom = () => { window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  })
  }

  return (
    <ScrollingProvider>
          <img id="monitor" src={Monitor} alt="monitor"></img>
      <Jumbotron id="blueJo">
        <Row>
            {/* <Container id="mainJoTheFish"> */}
          <Col >
              <div className="center">
                <h1 className="alignheading">Jo sits in your browser and will warn you when something smells
                a bit fishy.
                </h1>
              {/* <p className="aligntext">
                Jo sits in your browser and will warn you when something smells
                a bit fishy.
              </p> */}
              <Button variant="primary" href="http://jothefish.com/download" target="_blank" id="downloadBtn">Download Chrome Extension</Button>
              </div>
          </Col>
            {/* </Container> */}
          <Col>
            <img id="landingjo" src={BlueJo} alt="blue Jo"></img>
          </Col>
        </Row>
        <Row>
          <Col className="centeralignheading" id="arrowDown" xs={12} lg={12}>
            {/* <SectionLink section="howJoWorks">
              {({ onClick, isSelected }) => (
                <img
                  id="blueDownArrow"
                  src={downArrow}
                  alt="down"
                  onClick={onClick}
                  selected={isSelected}
                />
              )}
            </SectionLink> */}
          </Col>
        </Row>
      </Jumbotron>

      {/* mobile */}
      <Jumbotron id="mobileBlueJo">
        <img id="partialJo" src={PartialJo} alt="blue Jo"></img>
        <h1 id="jothefishMobile" className="alignheading mobileLanding">Jo the Fish</h1>
        <p className="aligntext mobileLanding">
          Jo sits in your browser and will warn you when something smells a bit
          fishy.
        </p>
        <Container className="downloadContainer" >
          <Button href="http://jothefish.com/download" target="_blank" id="mobileDownloadBtn">Download Chrome Extension</Button>
        </Container>
        <Container className="centeralignheading" >
          <SectionLink section="howJoWorks">
            {({ onClick, isSelected }) => (
              <img
                id="blueDownArrow"
                src={downArrow}
                alt="down"
                onClick={onClick}
                selected={isSelected}
              />
            )}
          </SectionLink>
        </Container>
      </Jumbotron>
      {/* end mobile */}

      <Section id="howJoWorks">
        <HowJoWorks />
      </Section>
      <Container fluid className="underTheWave">
        <Reactions />
        <div id="subscribeContainer">
        <Element name= "subscribe">
          <SignUpEarlyAccess/>
        </Element>
        </div>
        
        {/* <Row>
          <Col className="centeralignheading" id="whiteArrowDown" xs={12} lg={12}>
                <img
                  id="whiteDownArrow"
                  src={whiteDownArrow}
                  alt="down"
                  onClick={scrollToBottom}
                />
          </Col>
        </Row> */}
      </Container>


    </ScrollingProvider>
    
  );
}
