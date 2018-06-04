import React from 'react';
import './middle-bar.css';
import Explorer from './explorer/explorer.container';
import FileContent from './file-content/file-content.container';

const MiddleBar = () => (
  <div className="middle-bar row">
    <div className="left middle-bar__left-panel">
      <Explorer />
    </div>
    <div className="middle-bar__right-panel">
      <FileContent />
    </div>
  </div>
);

export default MiddleBar;
