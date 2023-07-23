import axios from 'axios';

export default function getTotalCitizen() {
  return axios

    .get("http://localhost:3000/api/totals/citizens")
}