import React, { Component, Fragment } from 'react';

import FaFile from 'react-icons/lib/fa/file-o';
import FaFolder from 'react-icons/lib/fa/folder-o';
import IoRefresh from 'react-icons/lib/io/android-refresh';
import FaClone from 'react-icons/lib/fa/clone';
import FaSearch from 'react-icons/lib/fa/search';
import GoGitBranch from 'react-icons/lib/go/git-branch';
import FaBug from 'react-icons/lib/fa/bug';
import FaPDF from 'react-icons/lib/fa/file-pdf-o';
import MdExtension from 'react-icons/lib/md/extension';
import SetiFolder from '../../svg/icons/folder.svg';
import SetiReact from '../../svg/icons/react.svg';
import SetiJSON from '../../svg/icons/json.svg';
import config from '../../config/config';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandFolder: true,
      expandExplorer: true,
      fromExplorer: false,
    };
    this.toggleFolder = this.toggleFolder.bind(this);
    this.toggleExplorer = this.toggleExplorer.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.fromExplorer) {
      const { currentFile } = props;

      if (currentFile && currentFile.inFolder) {
        state.expandFolder = true;
      }
    }

    state.fromExplorer = false;

    return state;
  }

  toggleFolder() {
    this.setState({
      expandFolder: !this.state.expandFolder,
      fromExplorer: true,
    });
  }

  toggleExplorer() {
    this.setState({
      expandExplorer: !this.state.expandExplorer,
    });
  }

  render() {
    const { currentFile } = this.props;
    const name = currentFile ? currentFile.name : undefined;

    return (
      <Fragment>
        <div className="middle-bar__left-column center">
          <FaClone className="icon--active" />
          <FaSearch />
          <GoGitBranch />
          <FaBug />
          <MdExtension />
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
                <a
                  className={classnames('explorer--open reset-link', {
                    'explorer--close': !this.state.expandExplorer,
                  })}
                  onClick={evt => {
                    evt.preventDefault();
                    this.toggleExplorer();
                  }}
                  href="/"
                >
                  {' '}
                  EXPLORER<span className="hidden-sm">: VATWEB.FR</span>
                </a>
              </div>
              <div className="float-right middle-bar__left-panel__options">
                <span className="options__icons">
                  <FaFile />
                </span>
                <span className="options__icons">
                  <FaFolder />
                </span>
                <span className="options__icons">
                  <IoRefresh />
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
                  onClick={item.type === 'folder' ? this.toggleFolder : null}
                >
                  {item.type !== 'folder' ? (
                    <Link
                      title={item.name}
                      to={`/file/${item.name}`}
                      className="file--link"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div
                      className={classnames('folder--open', {
                        'folder--close': !this.state.expandFolder,
                      })}
                    >
                      {content}
                    </div>
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
