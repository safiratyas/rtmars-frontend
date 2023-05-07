/* eslint-disable import/no-anonymous-default-export */
const logout = () => {
  localStorage.removeItem('token');
};

export default {
  logout
}