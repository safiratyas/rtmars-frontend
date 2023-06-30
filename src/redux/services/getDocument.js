import axios from 'axios';

const token = localStorage.getItem('token');

export default function getDocumentID(id) {
  return axios

    .get(`http://localhost:3000/api/documents/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}