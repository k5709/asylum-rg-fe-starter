import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const { isAuthenticated } = useAuth0;
  const buttonStyle = {
    backgroundColor: isAuthenticated ? '#fd5c63' : '#0066b2', // Change color for logout
    border: 'none',
    cursor: 'pointer',
    color: '#E2F0F7',
    fontSize: '16px',
    borderRadius: '10px', // Rounded corner
  };
  const { loginWithRedirect } = useAuth0();
  return (
    <Button style={buttonStyle} onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};
export default LoginButton;
