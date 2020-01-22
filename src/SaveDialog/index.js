import React from 'react';

import {
  Modal,
  Button,
  Container,
} from 'react-bootstrap';

import FileTypeSelector from './FileTypeSelector';
import SaveButton from './SaveButton';

function SaveDialog(props) {
  return (
    <Container>

      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <SaveButton
            onClick={props.onButtonClick}
          />
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SaveDialog;
