import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  //Render user information if the user is authenticated
  return (
    <div style={{ paddingLeft: '2%', margin: '0.5%' }}>
      <h1>Profile</h1>
      <img src={user.picture} alt={user.name} style={{ width: '150px' }} />
      <h2>Name: {user.name}</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
export default Profile;
