import axios from 'axios';
import { isExpired, decodeToken } from 'react-jwt';

const token = localStorage.getItem('token');

export default function getUser() {
  const data = decodeToken(token);
  const isMyTokenExpired = isExpired(token);

  let toLogin = false;
  if (!token || isMyTokenExpired) {
    toLogin = true;
  }

  return {
    data,
    toLogin,
  };
}
