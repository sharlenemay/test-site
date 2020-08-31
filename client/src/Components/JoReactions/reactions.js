import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HappyJo from "../../Jo/Jo-happy-10-flat-green-fin.svg";
import NeutralJo from "../../Jo/Jo-neutral-10-flat.svg";
import SickJo from "../../Jo/Jo-dead-10-flat-B.svg";
import ConfusedJo from "../../Jo/Jo-confused-10-flatB.svg";
import ShadedHappyJo from "../../Jo/shaded-Jo-happy.svg";
import ShadedSickJo from "../../Jo/shaded-Jo-sick.svg";
import ShadedConfusedJo from "../../Jo/shaded-Jo-confused.svg";
import ShadedNeutralJo from "../../Jo/shaded-Jo-neutral.svg";
import "./reactions.css";
import { CSSTransition } from "react-transition-group";

export default function Reactions() {
  const [showHappyJo, setShowHappyJo] = useState(false);
  const [showSickJo, setShowSickJo] = useState(false);
  const [showConfusedJo, setShowConfusedJo] = useState(false);
  const [showNeutralJo, setShowNeutralJo] = useState(false);

  const happyReaction = `When we know this company is legit and tends to do the right thing, Jo will just chill and swim around. Good responses to an incident make Jo happy too.`;
  const sickReaction = `Yeah this ain't good... We found out some worrying intel about this page and we'd like you to review it. You make the final call but Jo just wants you to know that this water ain't that clear.`;
  const confusedReaction = `Sometimes Jo doesn't know but don't worry! You can help him by sharing information about the website and business behind it. This will get reviewed by our school of fishes and shared with all of Jo's friends.`;
  const neutralReaction = `Nothing to be highlighted? NEUTRAL Jo will go on its way.`;

  return (
    <div>
      <Container fluid className="reactions">
        <Container>
          <Row className="getToKnowJo">
            <h2 className="whiteText">Get to Know Jo</h2>
            <p className="whiteText">
              Jo is deeply allergic to: any type of discrimination, hate speech,
              unethical business practices, racial inequality, links to 'dirty
              money', privacy invasion, modern slavery, child labor, mass
              pollution, public-misinformation for self gain, funding of
              anti-LGBTQIA+ organizations, human-rights violations...{" "}
            </p>
            <p className="whiteText">
              {" "}
              Jo likes people and businesses who do right for the community,
              people who own up to their mistakes and use it as fuel to drive
              drastic change, people that fight for positive impact.
            </p>
          </Row>

          {/* mobile */}
          <Container id="mobileJos">
            <Row>
              <img className="mobileJo" src={HappyJo} alt="happy" />
              <Card className="mobileReactions">
                {" "}
                <h3 style={{ color: "#15E659" }}>Happy Jo</h3>
                {happyReaction}{" "}
              </Card>
            </Row>
            <Row>
              <img className="mobileJo" src={SickJo} alt="sick" />
              <Card className="mobileReactions">
                {" "}
                <h3 style={{ color: "#FE5F55" }}>Sick Jo</h3>
                {sickReaction}{" "}
              </Card>
            </Row>
            <Row>
              <img className="mobileJo" src={ConfusedJo} alt="confused" />
              <Card className="mobileReactions">
                {" "}
                <h3 style={{ color: "#FFC126" }}>Confused Jo</h3>
                {confusedReaction}{" "}
              </Card>
            </Row>
            <Row>
              <img className="mobileJo" src={NeutralJo} alt="neutral" />
              <Card className="mobileReactions">
                {" "}
                <h3 style={{ color: "#4EC8F4" }}>Neutral Jo</h3>
                {neutralReaction}{" "}
              </Card>
            </Row>
          </Container>
          {/* end mobile */}

          {/* ipad */}
          <Container id="ipadJos">
            <Row>
              <Col>
                <img className="mobileJo" src={HappyJo} alt="happy" />
                <Card className="mobileReactions">
                  {" "}
                  <h3 style={{ color: "#15E659" }}>Happy Jo</h3>
                  {happyReaction}{" "}
                </Card>
              </Col>
              <Col>
              <img className="mobileJo" src={SickJo} alt="sick" />
              <Card className="mobileReactions">
                {" "}
                <h3 style={{ color: "#FE5F55" }}>Sick Jo</h3>
                {sickReaction}{" "}
              </Card>
              </Col>
            </Row>
            <Row>
              <Col>
              <img className="mobileJo" src={ConfusedJo} alt="confused" />
              <Card className="mobileReactions">
                {" "}
                <h3 style={{ color: "#FFC126" }}>Confused Jo</h3>
                {confusedReaction}{" "}
              </Card>
              </Col>
              <Col>
                <img className="mobileJo" src={NeutralJo} alt="neutral" />
                <Card className="mobileReactions">
                  {" "}
                  <h3 style={{ color: "#4EC8F4" }}>Neutral Jo</h3>
                  {neutralReaction}{" "}
                </Card>
              </Col>
            </Row>
          </Container>
          {/* end ipad */}

          <Row id="fourjos">
            <Col className="addingImgMargins">
              {showHappyJo ? (
                <img
                  src={HappyJo}
                  alt="happy jo"
                  className="hoveredJo"
                  onMouseOver={() => setShowHappyJo(true)}
                  onMouseOut={() => setShowHappyJo(false)}
                />
              ) : (
                <img
                  src={ShadedHappyJo}
                  alt="happy jo"
                  onMouseOver={() => setShowHappyJo(true)}
                  onMouseOut={() => setShowHappyJo(false)}
                />
              )}
            </Col>
            <Col className="addingImgMargins">
              {showSickJo ? (
                <img
                  src={SickJo}
                  alt="sick jo"
                  className="hoveredJo"
                  onMouseOver={() => setShowSickJo(true)}
                  onMouseOut={() => setShowSickJo(false)}
                />
              ) : (
                <img
                  src={ShadedSickJo}
                  alt="sick jo"
                  onMouseOver={() => setShowSickJo(true)}
                  onMouseOut={() => setShowSickJo(false)}
                />
              )}
            </Col>
            <Col className="addingImgMargins">
              {showConfusedJo ? (
                <img
                  src={ConfusedJo}
                  alt="confused jo"
                  className="hoveredJo"
                  onMouseOver={() => setShowConfusedJo(true)}
                  onMouseOut={() => setShowConfusedJo(false)}
                />
              ) : (
                <img
                  src={ShadedConfusedJo}
                  alt="sick jo"
                  onMouseOver={() => setShowConfusedJo(true)}
                  onMouseOut={() => setShowConfusedJo(false)}
                />
              )}
            </Col>
            <Col className="addingImgMargins">
              {showNeutralJo ? (
                <img
                  src={NeutralJo}
                  alt="neutral jo"
                  className="hoveredJo"
                  onMouseOver={() => setShowNeutralJo(true)}
                  onMouseOut={() => setShowNeutralJo(false)}
                />
              ) : (
                <img
                  src={ShadedNeutralJo}
                  alt="neutral jo"
                  onMouseOver={() => setShowNeutralJo(true)}
                  onMouseOut={() => setShowNeutralJo(false)}
                />
              )}
            </Col>
          </Row>
        </Container>
        <Row>
          <CSSTransition
            in={showHappyJo}
            timeout={300}
            classNames="fadein"
            unmountOnExit
            onEnter={() => setShowHappyJo(true)}
            onExited={() => setShowHappyJo(false)}
          >
            <Card id="happyJoText">
              {" "}
              <h3 style={{ color: "#15E659" }}>Happy Jo</h3>
              {happyReaction}{" "}
            </Card>
          </CSSTransition>
          <CSSTransition
            in={showSickJo}
            timeout={300}
            classNames="fadein"
            unmountOnExit
            onEnter={() => setShowSickJo(true)}
            onExited={() => setShowSickJo(false)}
          >
            <Card id="sickJoText">
              {" "}
              <h3 style={{ color: "#FE5F55" }}>Sick Jo</h3>
              {sickReaction}{" "}
            </Card>
          </CSSTransition>

          <CSSTransition
            in={showConfusedJo}
            timeout={300}
            classNames="fadein"
            unmountOnExit
            onEnter={() => setShowConfusedJo(true)}
            onExited={() => setShowConfusedJo(false)}
          >
            <Card id="confusedJoText">
              {" "}
              <h3 style={{ color: "#FFC126" }}>Confused Jo</h3>
              {confusedReaction}{" "}
            </Card>
          </CSSTransition>

          <CSSTransition
            in={showNeutralJo}
            timeout={300}
            classNames="fadein"
            unmountOnExit
            onEnter={() => setShowNeutralJo(true)}
            onExited={() => setShowNeutralJo(false)}
          >
            <Card id="neutralJoText">
              {" "}
              <h3 style={{ color: "#4EC8F4" }}>Neutral Jo</h3>
              {neutralReaction}{" "}
            </Card>
          </CSSTransition>
        </Row>
      </Container>
    </div>
  );
}
