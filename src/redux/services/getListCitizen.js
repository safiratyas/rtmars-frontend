import axios from 'axios';

const token = localStorage.getItem('token');

export default function getCitizen() {
  return axios

    .get("http://localhost:3000/api/citizens", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}