import React from 'react';
import './top-bar.css';
import MdClose from 'react-icons/lib/md/close';
import IoMinus from 'react-icons/lib/io/minus';
import FaExpand from 'react-icons/lib/fa/expand';
import { getActiveItem } from '../utilities';

export const TopBar = props => {
  const currentFile = getActiveItem(props.openFiles);
  const name = currentFile ? currentFile.name : undefined;

  return (
    <div className="top-bar row">
      <div className="col-4-sm left ml-spacing top-bar__item">
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
      <div className="col-4-sm center top-bar__item">
        {name && `${name} - `}vatweb.fr
      </div>
    </div>
  );
};

export default TopBar;
