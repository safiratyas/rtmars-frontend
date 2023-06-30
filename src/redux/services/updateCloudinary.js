/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateUserCloudinary(id, cloudinaryUpload) {
  return axios
    // eslint-disable-next-line prefer-template
    .put(
      `http://localhost:3000/api/citizens/picture/${id}/cloudinary`,
      cloudinaryUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}