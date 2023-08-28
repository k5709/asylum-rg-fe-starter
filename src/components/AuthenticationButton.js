import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../auth/login-button';
import LogoutButton from '../auth/logout-button';

function NavigationMenu() {
  const { isAuthenticated } = useAuth0();

  return <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>;
}

export default NavigationMenu;
