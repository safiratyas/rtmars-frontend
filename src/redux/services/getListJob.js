import axios from 'axios';

export default function getJobs() {
  return axios

    .get("http://localhost:3000/api/jobs")
}