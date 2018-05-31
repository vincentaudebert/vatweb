import React from 'react';
import './middle-bar.css';
import Explorer from './Explorer/explorer.container';
import FileContent from './FileContent/file-content.container';

export const MiddleBar = props => {
  return (
    <div className="middle-bar row">
      <div className="col-3 left middle-bar__left-panel">
        <Explorer />
      </div>
      <div className="col-9 middle-bar__right-panel">
        <FileContent />
      </div>
    </div>
  );
};

export default MiddleBar;
