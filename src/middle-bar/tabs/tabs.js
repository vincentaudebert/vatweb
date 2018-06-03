import React, { Fragment } from 'react';
import SetiReact from '../../svg/icons/react.svg';
import SetiJson from '../../svg/icons/json.svg';
import MdClose from 'react-icons/lib/md/close';
import config from '../../config/config';
import { getFromSlug } from '../../utilities';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export const Tabs = props => {
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
            <Link
              title={file.name}
              to={`/file/${file.name}`}
              className="file--link"
            >
              <Fragment>
                <img
                  className="seti-icon seti-icon--big"
                  src={icon}
                  alt="Type Icon"
                />{' '}
                {file.name}{' '}
                <MdClose
                  onClick={() => props.closeFile(fullOpenFiles, file.name)}
                />
              </Fragment>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
