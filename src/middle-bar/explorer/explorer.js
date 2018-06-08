// @flow
// ================================
// eslint comment, please update asap when https://github.com/yannickcr/eslint-plugin-react/issues/1751 is merged
// ================================
import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import FaPDF from 'react-icons/lib/fa/file-pdf-o';
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
  state = {
    expandFolder: true,
    expandExplorer: true,
    // eslint-disable-next-line
    fromExplorer: false,
  };

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
    this.setState({
      expandFolder: !this.state.expandFolder,
      // eslint-disable-next-line
      fromExplorer: true,
    });
  };

  handleKeyDown = (evt: SyntheticKeyboardEvent<HTMLDivElement>): void => {
    if (evt.which === 13 || evt.which === 32) {
      this.toggleExplorer();
    }
  };

  toggleExplorer = (): void => {
    this.setState({
      expandExplorer: !this.state.expandExplorer,
    });
  };

  render() {
    const { currentFile } = this.props;
    const name = currentFile ? currentFile.name : undefined;

    return (
      <Fragment>
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
            <FaPDF />
          </a>
        </div>
        <div className="middle-bar__explorer">
          <div
            className={classnames('middle-bar__left-panel__title', {
              'mb-0': !this.state.expandExplorer,
            })}
          >
            <Fragment>
              <div className="float-left font-heavy">
                <button
                  className={classnames('explorer--open reset-button', {
                    'explorer--close': !this.state.expandExplorer,
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
            </Fragment>
          </div>
          <div
            className={classnames('middle-bar__left-panel__files', {
              'd-none': !this.state.expandExplorer,
            })}
          >
            {config.map(item => {
              let icon = SetiFolder;
              if (item.language === 'react') icon = SetiReact;
              if (item.language === 'json') icon = SetiJSON;

              const content = (
                <Fragment>
                  <img
                    className={classnames('seti-icon', {
                      'seti-icon--small': item.type === 'folder',
                      'seti-icon--big': item.type !== 'folder',
                    })}
                    src={icon}
                    alt="Type Icon"
                  />{' '}
                  {item.name}
                </Fragment>
              );

              return (
                <div
                  key={`explorer-${item.name}`}
                  className={classnames({
                    folder: item.type === 'folder',
                    file: item.type === 'file',
                    'folder--in': item.inFolder === true,
                    'd-none':
                      item.inFolder === true && !this.state.expandFolder,
                    'explorer--active': item.name === name,
                  })}
                >
                  {item.type !== 'folder' ? (
                    <Link to={`/file/${item.name}`} className="file--link">
                      {content}
                    </Link>
                  ) : (
                    <button
                      className="reset-button btn--folder"
                      onClick={evt => {
                        evt.preventDefault();
                        if (item.type === 'folder') {
                          this.toggleFolder();
                        }
                      }}
                      title="Open/Collapse folder"
                    >
                      <div
                        className={classnames('folder--open', {
                          'folder--close': !this.state.expandFolder,
                        })}
                      >
                        {content}
                      </div>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Explorer;
