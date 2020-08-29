import axios from "axios";

export const postMailchimp = email => axios.post(`/api/memberList/${email}`);

export const sendMail = data => axios.post("/api/sendMail");