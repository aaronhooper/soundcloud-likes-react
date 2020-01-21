import React, { useState } from 'react';

import {
  Modal,
  Button,
  Container,
} from 'react-bootstrap';

import FileTypeSelector from './FileTypeSelector';
import SaveButton from './SaveButton';

function SaveDialog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FileTypeSelector />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <SaveButton />
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SaveDialog;
