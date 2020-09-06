import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
// import { postMailchimp } from "../../utils/API";
// import axios from "axios";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./wantEarlyAccess.css";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () => 
  email &&
  email.value.indexOf("@") > -1 &&
  onValidated({
    EMAIL: email.value
  });

  return (
    <div
    >
      {status === "subscribing" && <div style={{color: "white"}}>Subscribing...</div>}
      {status === "error" && (
        <div
          style={{color: "white"}}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        className="contactinput"
        ref={node => (email = node)}
        type="email"
        placeholder="Email"
      />
      <br/>
      <Button variant="primary" type="submit" onClick={submit}>Sign Up</Button>
    </div>
  );
};

export default class EarlyAccess extends Component {

  render () {
    const url = "https://projectdoright.us10.list-manage.com/subscribe/post?u=a8c9af7d809178a5bc0f75589&amp;id=d83f6d0a5d"
    return (
    <div>
      <Container className="form" id={"earlyAccess"}>
        <h2 id="wantEarlyAccess" className="whiteText">Join our Newsletter!</h2>
        <MailchimpSubscribe 
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </Container>
    </div>
  )};
};