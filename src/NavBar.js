import React from 'react';
import {
  Navbar,
  Container,
} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          SoundCloud Likes Download
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
