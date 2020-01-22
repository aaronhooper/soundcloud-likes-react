import React from 'react';

import {
  Button,
} from 'react-bootstrap';

function SaveButton(props) {
  return (
    <div>
      <Button
        variant="primary"
        onClick={props.onClick}
      >
        Save Changes
      </Button>
    </div>
  );
}

export default SaveButton;
