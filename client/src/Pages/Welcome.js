import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./styles.css";
import BlueJo from "../Jo/Jo-happy-blue-10-flat.svg";
import LilJo from "../Jo/lilJo.svg";
import GoogleBrowser from "../Jo/googlebrowser.svg";
import Pin from "../Jo/pintomenu.svg";
import LoginFB from "../Jo/loginpiece.svg";
import SickJoPiece from "../Jo/sickJoPiece.svg";
import ConfusedJoPiece from "../Jo/confusedJoPiece.svg";
import WikiBlock from "../Jo/wikipediaBlock.svg";
import FacebookBlock from "../Jo/facebookBlock.svg";

export default function Welcome() {
  return (
    <Container id="welcomeContainer">
      <Row>
        <Col xs={8} sm={8} md={8} lg={8}>
          <div className="center">
            <h1 className="alignheading">Hello, I'm Jo the Fish.</h1>
            <h5 className="alignheading">
              Thanks for adopting me into your browser. I now live in the upper
              right corner here.
            </h5>
          </div>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <img id="landingjo" src={BlueJo} alt="blue Jo"></img>
        </Col>
      </Row>
      <Row>
        <img id="googlebrowser" src={GoogleBrowser} alt="demo"></img>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}>
          <img id="liljo" src={LilJo} alt="lil jo"></img>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p>
            If you don’t see me, please check the extensions and pin me in your
            menu bar, so that I can let you know more about the websites you’re
            browsing.
          </p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <img id="pinmenu" src={Pin} alt="pin"></img>
        </Col>
      </Row>
      <Row>
        <div className="how">
          <h1 className="alignheading">How does Jo work?</h1>
          <h5 className="alignheading">
          When you’re browsing a website, Jo will search through our database and notify you about anything fishy.
          </h5>
        </div>
      </Row>
      <Row>
          <Col xs={8} sm={8} md={8} lg={8}>
            <img id="loginSample" src={LoginFB} alt="fb"></img>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4}>
            <img className="JoPiece" src={SickJoPiece} alt="sickJo"></img>  
            <p className="caption">Uh oh, Jo doesn’t seem to enjoy swimming around here... you can click on the <strong>Read More</strong> button to find out what’s making Jo sick.</p>
          </Col>
      </Row>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h1 className="alignheading">Seeing a confused Jo?</h1>
          <h5 className="alignheading">
            That’s because we don’t have any information about this website yet. Help Jo by telling us what you know about it!           
          </h5>
          <h1 className="alignheading">Jo is just a fish.</h1>
          <h5 className="alignheading">
            We need your help to make Jo happy and healthy. Visit our website to learn about how to get involved.
          </h5>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
            <img className="JoPiece" src={ConfusedJoPiece} alt="confusedJo"></img>
        </Col>
      </Row>
      <Row>
        <div className="how">
          <h1 className="alignheading">Now you're ready to go!</h1>
          <h5 className="alignheading">
          Try clicking on the links to websites below and test it out for yourself.          </h5>
        </div>
      </Row>
      <Row>
        <Col>
        <img className="JoPiece" src={WikiBlock} alt="wiki"></img>
        </Col>
        <Col>
        <img className="JoPiece" src={FacebookBlock} alt="facebook"></img>
        </Col>
      </Row>
    </Container>
  );
}
