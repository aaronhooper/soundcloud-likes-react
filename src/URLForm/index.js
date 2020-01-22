import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import URLTextBox from './URLTextBox';
import DownloadButton from './DownloadButton';

function URLForm(props) {
  return (
    <Container>
      <Row>
        <Col md="6" className="mx-auto">
          <URLTextBox
            text={props.text}
            onKeyPress={props.onKeyPress}
            onChange={props.onChange} />
          <DownloadButton
            onClick={props.onButtonClick} />
        </Col>
      </Row>
    </Container>
  );
}

export default URLForm;
