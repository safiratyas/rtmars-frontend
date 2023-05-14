import axios from 'axios';

export default function getAdmin() {
  return axios

    .get("http://localhost:3000/api/admins")
}