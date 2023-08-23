import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAutheticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //return a message if the use is not authenicated
  if (!isAutheticated) {
    return <h1>Please log in to view your profile</h1>;
  }

  //Render user information if the user is authenticated
  return (
    <div>
      <h2>Profile</h2>
      <img src={user.picture} alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => (window.location.href = '/logout')}>Logout</button>
    </div>
  );
}
export default Profile;
