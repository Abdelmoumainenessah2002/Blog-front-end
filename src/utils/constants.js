import axios from "axios";

const request = axios.create({
  baseURL: "https://blog-back-end-red.vercel.app/",
});

export default request;
