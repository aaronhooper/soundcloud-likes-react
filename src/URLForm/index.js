import React from 'react';
import SoundCloud from '../soundcloud';
import ky from 'ky';

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
      data: null,
    };
  }

  async getData() {
    const sc = new SoundCloud(ky);
    const profileUrl = await sc.resolve(this.state.text);
    const data = await sc.getAllFavorites(profileUrl);

    this.setState({ data });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.getData();
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleClick = e => {
    this.getData();
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
