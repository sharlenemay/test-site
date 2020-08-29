import React, { Component } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./styles.css";
import {sendMail} from "../utils/API";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false
  }

  // handle input changes
  onNameChange(e) {
  this.setState({name: e.target.value})
  }

  onEmailChange(e) {
  this.setState({email: e.target.value})
  }

  onMessageChange(e) {
  this.setState({message: e.target.value})
  }
  
  // handle form submit
  handleSubmit(event) {
    event.preventDefault();
    
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post("/api/sendMail", data)
    .then((response)=>{
      this.setState({
        sent: true
      },this.resetForm());
      console.log("Message sent successfully.");
    }).catch(() => {
      console.log("Message failed to send.");
    })
  }

  resetForm = () => {
    this.setState({name: "", email: "", message: ""});
    setTimeout(() => {
      this.setState({
        sent: false
      })
    }, 3000);
  }
  
  render() {
    return (
      <div>
        <Jumbotron className="contact">
          <h1>Contact Us</h1>
        </Jumbotron>
        <Container className="form">
          <h2>Get In Touch</h2>
          <p>Want to find out more? Contact us!</p>
          <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <Form.Control
              className="messageinput"
              type="text"
              placeholder="Name"
              value={this.state.name} 
              onChange={this.onNameChange.bind(this)}
            />
            <Form.Control
              className="messageinput"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
            <Form.Control
              className="messageinput"
              as="textarea"
              placeholder="Message"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
            {this.state.sent ? <p>Message sent successfully.</p> : <p></p>}
            <Button variant="primary" type="submit" onClick={this.handleSubmit.bind(this)}>
              Send Message
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
