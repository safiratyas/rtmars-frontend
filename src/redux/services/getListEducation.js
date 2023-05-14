import axios from 'axios';

export default function getEducations() {
  return axios

    .get("http://localhost:3000/api/educations")
}