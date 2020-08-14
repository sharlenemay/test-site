import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { postMailchimp } from "../../utils/API";
// import axios from "axios";
import "./wantEarlyAccess.css";

export default class CustomForm extends Component {
  state = {
    email: "",
    // error: ""
  }

  // const url = process.env.MAILCHIMP_URL

  handleChange = (event) => {
    this.setState({email: event.target.value})
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    // // console.log(this.state);
    const email = {
      email: this.state.email
    };
    // axios
    // .post(`/api/memberList/:email`, email)
    // .then((res)=> {
    //   console.log(res)
    //   // console.log("You have been added to the list. Thank you!");
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
    event.preventDefault();
    postMailchimp({
      email_address: email
    }).then(() => {
      console.log("You have been added to the list. Thank you!");
    }).catch(() => {
      console.log("Email invalid. Please try again.");
    })
  };

  render () {
    return (
    <div>
      {/* <MailchimpSubscribe url={url} /> */}
      <Container className="form" id="earlyAccess">
        <h2 id="wantEarlyAccess" className="whiteText">Want early access?</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Control
            className="contactinput"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* {error ? error : ""} */}
        </Form>
      </Container>
    </div>
  )};
};