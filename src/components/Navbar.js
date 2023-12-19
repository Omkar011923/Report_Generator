import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const navigate = useNavigate()
    const Logout = () => {
      localStorage.removeItem('loggedInUser');
      props.loggedIn(false)
      navigate('/')
    };
  return (
    <div className="flex justify-between px-32 py-2 shadow-md bg-white items-center fixed w-full z-10">
        <img src="../image/Logo.png" alt="" className="w-56" />
        <Button variant="contained" onClick={Logout}>
          Logout
        </Button>
      </div>
  )
}
