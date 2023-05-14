import axios from 'axios';

export default function getReligion() {
  return axios

    .get("http://localhost:3000/api/religions")
}