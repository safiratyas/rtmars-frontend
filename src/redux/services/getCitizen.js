import axios from 'axios';

const token = localStorage.getItem('token');

export default function getCitizen(id) {
  return axios

    .get(`http://localhost:3000/api/citizens/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}