import React, { Component } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./styles.css";

export default class Contact extends Component {
  state = {
    name: null,
    email: null,
    message: null,
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

    axios.post("https://jothefishapi.herokuapp.com/api/sendMail", data)
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
        <Container className="form centertext">
          <h2>Get In Touch</h2>
          <p className="centertext">Want to find out more? Contact us!</p>
          <Form onSubmit={this.handleSubmit.bind(this)} action="/sendMail" method="POST">
            <Form.Group controlId="name">
              <Form.Label className="label">Name</Form.Label>          
              <Form.Control
                id="nameinput"
                className="messageinput"
                type="name"
                placeholder="Name"
                placeholderTextColor= 'gray'
                value={this.state.name} 
                onChange={this.onNameChange.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label className="label">Email</Form.Label> 
              <Form.Control
                id="emailinput"
                className="messageinput"
                type="email"
                placeholder="Email"
                placeholderTextColor= 'gray'
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label className="label">Message</Form.Label> 
              <Form.Control
                id="messageinput"
                className="messageinput"
                as="textarea"
                type="message"
                placeholder="Message"
                placeholderTextColor= 'gray'
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </Form.Group>
            {this.state.sent ? <p>Message sent successfully.</p> : <p></p>}
            <Button variant="primary" type="submit" className="joBtn" onClick={this.handleSubmit.bind(this)}>
              Send Message
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
