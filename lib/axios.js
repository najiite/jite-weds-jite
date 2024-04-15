import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://terastakefinance.com/wedding-backend/public/api/',
    timeout: 10000,
    headers: { "Content-Type": "multipart/form-data"}
  });

export {instance}