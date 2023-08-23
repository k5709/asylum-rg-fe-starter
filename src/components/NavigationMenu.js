import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

function NavigationMenu() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const buttonStyle = {
    backgroundColor: isAuthenticated ? '#fd5c63' : '#0066b2', // Change color for logout
    border: 'none',
    cursor: 'pointer',
    color: '#E2F0F7',
    fontSize: '16px',
    borderRadius: '10px', // Rounded corner
  };

  return (
    <div>
      {isAuthenticated && <Profile />}
      {isAuthenticated ? (
        <button onClick={() => logout()} style={buttonStyle}>
          Logout
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()} style={buttonStyle}>
          Login
        </button>
      )}
    </div>
  );
}

export default NavigationMenu;
