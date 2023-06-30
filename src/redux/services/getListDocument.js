import axios from 'axios';

const token = localStorage.getItem('token');

export default function getDocuments() {
  return axios

    .get("http://localhost:3000/api/documents", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}