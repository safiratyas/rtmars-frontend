/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');

export default function createCitizen(bodyUser) {
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      "http://localhost:3000/api/citizens/create/data",
      bodyUser, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}