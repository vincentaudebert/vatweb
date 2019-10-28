// @flow
// ================================
// eslint comment, please update asap when https://github.com/yannickcr/eslint-plugin-react/issues/1751 is merged
// ================================
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import IconFile from '../../svg/file-svg';
import IconFolder from '../../svg/folder-svg';
import IconRefresh from '../../svg/refresh-svg';
import IconFileExplorer from '../../svg/explorer-svg';
import IconSearch from '../../svg/search-svg';
import IconGit from '../../svg/git-svg';
import IconDebug from '../../svg/debug-svg';
import IconExtensions from '../../svg/extensions-svg';
import SetiFolder from '../../svg/icons/folder.svg';
import SetiReact from '../../svg/icons/react.svg';
import SetiJSON from '../../svg/icons/json.svg';
import config from '../../config/config';
import type { fullFileType } from '../../app/app.types';

type ExplorerProps = {
  currentFile: fullFileType,
};

type ExplorerState = {
  expandFolder: boolean,
  expandExplorer: boolean,
  fromExplorer: boolean,
};

class Explorer extends Component<ExplorerProps, ExplorerState> {
  constructor() {
    super();
    this.state = {
      expandFolder: true,
      expandExplorer: true,
      // eslint-disable-next-line
      fromExplorer: false,
    };
  }

  static getDerivedStateFromProps(props: ExplorerProps, state: ExplorerState) {
    const newState = state;
    if (!state.fromExplorer) {
      const { currentFile } = props;

      if (currentFile && currentFile.inFolder) {
        newState.expandFolder = true;
      }
    }

    newState.fromExplorer = false;

    return newState;
  }

  toggleFolder = (): void => {
    const { expandFolder } = this.state;
    this.setState({
      expandFolder: !expandFolder,
      // eslint-disable-next-line
      fromExplorer: true,
    });
  };

  toggleExplorer = (): void => {
    const { expandExplorer } = this.state;
    this.setState({
      expandExplorer: !expandExplorer,
    });
  };

  render() {
    const { expandExplorer, expandFolder } = this.state;
    const { currentFile } = this.props;
    const name = currentFile ? currentFile.name : undefined;

    return (
      <>
        <div className="middle-bar__left-column center">
          <IconFileExplorer className="icon--explorer icon--active" />
          <IconSearch className="icon--explorer" />
          <IconGit className="icon--explorer" />
          <IconDebug className="icon--explorer" />
          <IconExtensions className="icon--explorer" />
          <a
            href="/assets/Vincent_Audebert_CV.pdf"
            target="_blank"
            className="reset-link pdf-link"
            title="Download my CV"
            rel="noopener noreferrer"
          >
            <FaFilePdf className="icon--explorer-pdf" />
          </a>
        </div>
        <div className="middle-bar__explorer">
          <div
            className={classnames('middle-bar__left-panel__title', {
              'mb-0': !expandExplorer,
            })}
          >
            <>
              <div className="float-left font-heavy">
                <button
                  type="button"
                  className={classnames('explorer--open reset-button', {
                    'explorer--close': !expandExplorer,
                  })}
                  onClick={evt => {
                    evt.preventDefault();
                    this.toggleExplorer();
                  }}
                  title="Open/Collapse explorer"
                >
                  {' '}
                  EXPLORER<span className="hidden-sm">: VATWEB.FR</span>
                </button>
              </div>
              <div className="float-right middle-bar__left-panel__options">
                <span className="options__icons">
                  <IconFile className="icon--explorer-title" />
                </span>
                <span className="options__icons">
                  <IconFolder className="icon--explorer-title" />
                </span>
                <span className="options__icons">
                  <IconRefresh className="icon--explorer-title" />
                </span>
              </div>
            </>
          </div>
          <div
            className={classnames('middle-bar__left-panel__files', {
              'd-none': !expandExplorer,
            })}
          >
            {config.map(item => {
              let icon = SetiFolder;
              if (item.language === 'react') icon = SetiReact;
              if (item.language === 'json') icon = SetiJSON;

              const content = (
                <>
                  <img
                    className={classnames('seti-icon', {
                      'seti-icon--small': item.type === 'folder',
                      'seti-icon--big': item.type !== 'folder',
                    })}
                    src={icon}
                    alt="Type Icon"
                  />{' '}
                  {item.name}
                </>
              );

              return (
                <div
                  key={`explorer-${item.name}`}
                  className={classnames({
                    folder: item.type === 'folder',
                    file: item.type === 'file',
                    'folder--in': item.inFolder === true,
                    'd-none': item.inFolder === true && !expandFolder,
                    'explorer--active': item.name === name,
                  })}
                >
                  {item.type === 'folder' ? (
                    <button
                      type="button"
                      className="reset-button btn--folder"
                      onClick={evt => {
                        evt.preventDefault();
                        this.toggleFolder();
                      }}
                      title="Open/Collapse folder"
                    >
                      <div
                        className={classnames('folder--open', {
                          'folder--close': !expandFolder,
                        })}
                      >
                        {content}
                      </div>
                    </button>
                  ) : (
                    <Link to={`/file/${item.name}`} className="file--link">
                      {content}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Explorer;
