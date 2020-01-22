import React from 'react';

import SoundCloud from './soundcloud';
import ky from 'ky';
import fileDownload from 'js-file-download';

import NavBar from './NavBar';
import URLForm from './URLForm/';
import SaveDialog from './SaveDialog/';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
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

  async getDataAndShowModal() {
    await this.getData();
    fileDownload(JSON.stringify(this.state.data), 'likes.json');
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      return this.getDataAndShowModal();
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleClick = e => {
    return this.getDataAndShowModal();
    // download button should trigger:
    // fileDownload(JSON.stringify(this.state.data), 'likes.json');
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <URLForm
          text={this.state.text}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          onButtonClick={this.handleClick} />
        <SaveDialog />
      </div>
    );
  }
}

export default App;
