import React, { useState, useEffect, useContext } from 'react';
import './WelcomeHeader.css'
import { StoreContext } from '../../context/StoreContext.js';
import { assets } from '../../assets/assets.js';

function WelcomeHeader() {
  const { url, token, setToken } = useContext(StoreContext);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      fetch(`${url}/api/user/userinfo`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token': storedToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setUserData(data.data[0]);
          } else {
            setToken('');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setToken('');
        });
    }
  }, [url, token, setToken]);



  const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token');
  };

  return (
    <div className='welcome-header'>
      <div className='greating'>
        <p>Cześć,</p>
        <p><span>{userData.name}</span></p>
      </div>
        <p className='logo'>Project Name</p>
      <img className='user-icon' src={assets.user_icon} alt='user picture'/>
    </div>
  );
}

export default WelcomeHeader;