import axios from 'axios';

const token = localStorage.getItem('token');

export default function notificationAdministrator() {
  return axios

    .get("http://localhost:3000/api/notifications", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}