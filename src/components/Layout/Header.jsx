import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
//     //authentication portion//
import AuthenticationButton from '../AuthenticationButton';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {
  // destructred isAuthenticated to use in a ternary operation to conditionally render the profile tab
  const { isAuthenticated } = useAuth0();
  //
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {/* Conditionally changing the login button to display log out while user is authenticated */}
        <Link
          to="/"
          component={AuthenticationButton}
          style={{ color: '#E2F0F7' }}
        />

        <Link
          to="/"
          style={{
            color: '#E2F0F7',
            paddingRight: '75px',
            paddingLeft: '75px',
          }}
        >
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Graphs
        </Link>

        {/* conditionally rendering the profile tab if authenticated */}
        {isAuthenticated ? (
          <Link to="/profile" style={{ color: '#E2F0F7' }}>
            Profile
          </Link>
        ) : undefined}
      </div>
    </div>
  );
}

export { HeaderContent };
