import React from 'react';

import {
  Button,
} from 'react-bootstrap';

class DownloadButton extends React.Component {
  render() {
    return (
      <Button
        variant='primary'
        onClick={this.props.onClick}
      >
        Download
      </Button>
    );
  }
}

export default DownloadButton;
