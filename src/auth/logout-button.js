import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const { isAuthenticated } = useAuth0;
  const buttonStyle = {
    backgroundColor: isAuthenticated ? '#fd5c63' : '#0066b2',
    border: 'none',
    cursor: 'pointer',
    color: '#E2F0F7',
    fontSize: '16px',
    borderRadius: '10px',
  };
  const { logout } = useAuth0();
  return (
    <Button style={buttonStyle} onClick={() => logout()}>
      Log Out
    </Button>
  );
};
export default LogoutButton;
