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
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <URLTextBox
              text={this.props.text}
              onKeyPress={this.props.onKeyPress}
              onChange={this.props.onChange} />
            <DownloadButton
              onClick={this.props.onButtonClick} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default URLForm;
