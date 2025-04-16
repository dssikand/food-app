import axios from 'axios';
// console.log(process.env.REACT_APP_DEV_BASE_URL,"process.env.REACT_APP_DEV_BASE_URL")
export const BaseService = axios.create({
  baseURL: 'https://us-central1-mumy-stiffin.cloudfunctions.net'
});

