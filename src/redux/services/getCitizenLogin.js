import axios from 'axios';

const token = localStorage.getItem('token');

export default function getLogin() {
  return axios

    .get("http://localhost:3000/api/citizens/who-am-i", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}