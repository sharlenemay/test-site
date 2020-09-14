import React from "react";
import { Container, Button, Jumbotron, Row, Col } from "react-bootstrap";
import "./styles.css";
import ConfusedJo from "../Jo/Jo-confused-10-flatB.svg";
import BlueJo from "../Jo/Jo-happy-blue-10-flat.svg";

export default function GetInvolved() {
  return (
    <div>
      <Jumbotron className="involved">
        <h1>Get Involved</h1>
      </Jumbotron>
      <Container className="jothefish involvedCols">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img id="confusedJo" src={ConfusedJo} alt="confused Jo" className="involvedFish"></img>
            <h2 className="involvedOptns">Share your knowledge!</h2>
            <p className="getinvolved">
              Jo is just a fish... You'll need to tell him about things so he can
              dig deeper and share it with all it's friends. If you know anything
              fishy about a business fill out our form.
            </p>
            <Button className="btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3Y69xP1v-P10malw7vxZIsZfS9UBjv3LtZWr_BavlWxcdkw/viewform"
              variant="primary"
            >
              Tell us more
            </Button>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img id="blueJoInvolved" src={BlueJo} alt="blue Jo" className="involvedFish"></img>
            <h2 className="involvedOptns">Become a Reviewer!</h2>
            <p className="getinvolved">
              Jo needs your help in reviewing and investigating the information
              provided. It won't take long and it's super rewarding. Interested?
              Fill out our form below and Jo's team will be in contact.
            </p>
            <Button className="btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTbXKEcRXQKynzECNQVtulmuJ7l-OAyEWzFYr4uOBqsVfGuQ/viewform"
              variant="primary"
            >
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
