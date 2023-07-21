import axios from 'axios';

export default function getAgenda() {
  return axios

    .get("http://localhost:3000/api/agendas")
}