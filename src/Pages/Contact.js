import React, { Component } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./styles.css";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  onNameChange(e) {
    this.setState({name: e.target.value})
    }
  
    onEmailChange(e) {
    this.setState({email: e.target.value})
    }
  
    onMessageChange(e) {
    this.setState({message: e.target.value})
    }
  
  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    axios({
      method: "POST", 
      url:"http://localhost:3001/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        console.log("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail'){
        console.log("Message failed to send.")
      }
    })
  }
  resetForm() {
    
    this.setState({name: "", email: "", message: ""})
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
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
