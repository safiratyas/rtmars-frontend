import React from "react";
import { userLogout } from '../../../redux/actions/logout';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

function CardLogout() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    window.location.href = '/login';
  }

  return (
    <>
      <div>
        <Button className="nav-signup" style={{ marginLeft: '10px' }} onClick={logout}>Logout</Button>
      </div>
    </>
  );
}

export default CardLogout;