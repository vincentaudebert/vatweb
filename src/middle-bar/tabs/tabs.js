// @flow
import React from 'react';
import { MdClose } from 'react-icons/md';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import SetiReact from '../../svg/icons/react.svg';
import SetiJson from '../../svg/icons/json.svg';
import config from '../../config/config';
import { getFromSlug } from '../../utilities';
import type { fileType } from '../../app/app.types';

type TabsProps = {
  openFiles: Array<fileType>,
  // eslint goes nuts on next line for some reasons...
  // eslint-disable-next-line
  closeFile: Function,
};

const Tabs = (props: TabsProps) => {
  const filteredFiles = config.filter(item => item.type === 'file');
  const fullOpenFiles = props.openFiles.map(item => {
    const completeItem = getFromSlug(filteredFiles, item.name);
    if (!completeItem) return undefined;

    completeItem.active = item.active;
    return completeItem;
  });

  return (
    <div className="tabs">
      {fullOpenFiles.map(file => {
        if (!file) return null;

        let icon = SetiReact;
        if (file.language === 'json') icon = SetiJson;
        return (
          <div
            key={`tabs-${file.name}`}
            className={classnames('tab d-inline-block', {
              'tab--active': file.active,
            })}
          >
            <Link to={`/file/${file.name}`} className="file--link">
              <>
                <img
                  className="seti-icon seti-icon--big"
                  src={icon}
                  alt="Type Icon"
                />{' '}
                {file.name}{' '}
                <button
                  className="reset-button"
                  title={`Close ${file.name}`}
                  onClick={evt => {
                    evt.preventDefault();
                    props.closeFile(fullOpenFiles, file.name);
                  }}
                >
                  <MdClose className="icon--tab" />
                </button>
              </>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
