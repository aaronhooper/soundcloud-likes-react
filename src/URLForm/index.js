import React from 'react';

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
      <div>
        <h2>This Is URLForm component</h2>
        <URLTextBox
          text={this.state.text}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
        <DownloadButton
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default URLForm;
