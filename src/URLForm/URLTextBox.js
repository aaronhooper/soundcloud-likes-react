import React from 'react';

import {
  FormControl,
} from 'react-bootstrap';

class URLTextBox extends React.Component {

  render() {
    return (
      <FormControl
        placeholder="Enter url here"
        className='mt-5 mb-4'
        value={this.props.text}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
      ></FormControl>
    );
  }
}

export default URLTextBox;
