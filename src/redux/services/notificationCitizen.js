import axios from 'axios';

const token = localStorage.getItem('token');

export default function notificationCitizen() {
  return axios

    .get("http://localhost:3000/api/notifications/citizens", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}