import React from 'react';

class URLTextBox extends React.Component {

  render() {
    return (
      <input
        type="text"
        placeholder="Enter url here"
        value={this.props.text}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
      />
    );
  }
}

export default URLTextBox;
