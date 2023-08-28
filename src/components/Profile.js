import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAutheticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  //return a message if the use is not authenicated
  // if (!isAutheticated) {
  //   return <h1>Please log in to view your profile</h1>;
  // } else

  //Render user information if the user is authenticated
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6} lg={4}>
        <div className="text-center p-4 border rounded shadow-sm">
          <h1 className="mb-4">Profile</h1>
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-circle mb-3"
            style={{ width: '150px' }}
          />
          <h2 className="mb-2">Name: {user.name}</h2>
          <pre className="text-left border bg-light p-3">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </Col>
    </Row>
  );
}
export default Profile;
