import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function NavigationMenu() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        <li>
          {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Login</button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
