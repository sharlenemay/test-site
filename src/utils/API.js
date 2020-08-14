import axios from "axios";

export const postMailchimp = email => axios.post(`/api/memberList/${email}`);