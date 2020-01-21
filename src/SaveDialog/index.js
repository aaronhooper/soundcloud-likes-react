import React from 'react';

import FileTypeSelector from './FileTypeSelector';
import SaveButton from './SaveButton';

function SaveDialog() {
  return (
    <div>
      <h2>This is the save dialog component</h2>
      <FileTypeSelector />
      <SaveButton />
    </div>
  );
}

export default SaveDialog;
