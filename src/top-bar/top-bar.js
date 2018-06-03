import React from 'react';
import './top-bar.css';
import MdClose from 'react-icons/lib/md/close';
import IoMinus from 'react-icons/lib/io/minus';
import FaExpand from 'react-icons/lib/fa/expand';
import type { fileType, fullFileType } from '../../app/app.types';

type TopBarProps = {
  currentFile: fullFileType,
  openFiles: fileType,
};

export const TopBar = (props: TopBarProps) => {
  const { currentFile } = props;
  const name = currentFile ? currentFile.name : undefined;

  return (
    <div className="top-bar row">
      <div className="d-inline-block left ml-spacing top-bar__item">
        <button
          type="button"
          onClick={() => props.toggleEditor(false)}
          className="top-bar__btn top-bar__btn--close"
        >
          <MdClose />
        </button>
        <button
          type="button"
          value="Reduce"
          className="top-bar__btn top-bar__btn--minimize"
        >
          <IoMinus />
        </button>
        <button
          type="button"
          value="Expand"
          className="top-bar__btn top-bar__btn--expand"
        >
          <FaExpand />
        </button>
      </div>
      <div className="d-inline-block center top-bar__filename">
        {name && `${name} - `}vatweb.fr
      </div>
    </div>
  );
};

export default TopBar;
