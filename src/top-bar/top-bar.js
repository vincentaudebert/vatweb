// @flow
import React from 'react';
import { MdClose } from 'react-icons/md';
import { IoIosRemove, IoIosResize } from 'react-icons/io';
import './top-bar.css';
import type { fullFileType } from '../app/app.types';

type TopBarProps = {
  currentFile: fullFileType,
  toggleEditor: Function,
};

const TopBar = (props: TopBarProps) => {
  const { currentFile } = props;
  const name = currentFile ? currentFile.name : undefined;

  return (
    <div className="top-bar row">
      <div className="d-inline-block left ml-spacing top-bar__left">
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
          <IoIosRemove />
        </button>
        <button
          type="button"
          value="Expand"
          className="top-bar__btn top-bar__btn--expand"
        >
          <IoIosResize />
        </button>
      </div>
      <div className="d-inline-block center top-bar__right">
        {name && `${name} - `}vatweb.fr
      </div>
    </div>
  );
};

export default TopBar;
