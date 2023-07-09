/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateCitizenCloudinary(cloudinaryUpload) {
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      'http://localhost:3000/api/citizens/picture/citizen/cloudinary',
      cloudinaryUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}