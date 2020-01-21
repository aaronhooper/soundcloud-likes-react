import React from 'react';

class DownloadButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Download
      </button>
    );
  }
}

export default DownloadButton;
