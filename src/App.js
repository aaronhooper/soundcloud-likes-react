import React from 'react';

import NavBar from './NavBar';
import URLForm from './URLForm/';
import SaveDialog from './SaveDialog/';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <URLForm />
      <SaveDialog />
    </div>
  );
}

export default App;
