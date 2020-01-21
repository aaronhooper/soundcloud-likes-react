import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import URLTextBox from './URLTextBox';
import DownloadButton from './DownloadButton';

class URLForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleClick = e => {
    console.log('Download button clicked');
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <URLTextBox
              text={this.state.text}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange} />
            <DownloadButton
              onClick={this.handleClick} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default URLForm;
