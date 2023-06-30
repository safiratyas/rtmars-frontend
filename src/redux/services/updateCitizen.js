/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateUserDetail(id, bodyUser) {
  return axios
    // eslint-disable-next-line prefer-template
    .put(
      `http://localhost:3000/api/citizens/update/profile/${id}`,
      bodyUser, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}