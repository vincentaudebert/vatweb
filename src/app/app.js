// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import ReactGA from 'react-ga';
import { FaMagic, FaBackward, FaHandPeace } from 'react-icons/fa';

import TopBar from '../top-bar/top-bar.container';
import MiddleBar from '../middle-bar/middle-bar';
import FooterBar from '../footer-bar/footer-bar';
import './app.css';

type AppProps = {
  wantedLocation: string,
  changeFile: Function,
  match: Object,
  history: Object,
};

type AppState = {
  editorOpen: boolean,
};

class App extends Component<AppProps, AppState> {
  constructor() {
    super();
    this.state = {
      editorOpen: true,
    };
  }

  componentDidMount() {
    const { match, changeFile } = this.props;
    const slug = match.params.slug || 'welcome.json';
    changeFile(slug);
    ReactGA.pageview(slug);

    const editorElmt = document.getElementById('editor');

    if (editorElmt) {
      editorElmt.addEventListener('transitionend', this.editorAnimationEnd);
    }
  }

  componentDidUpdate() {
    const { match, wantedLocation, changeFile, history } = this.props;
    const slug = match.params.slug || 'welcome.json';

    // if file just got close we want to change url to last file open
    if (wantedLocation && wantedLocation !== slug) history.push(wantedLocation);
    else {
      changeFile(slug);
      ReactGA.pageview(slug);
    }
  }

  toggleEditor = (value: boolean): void => {
    this.setState({
      editorOpen: value,
    });
  };

  editorAnimationEnd = (): void => {
    const { editorOpen } = this.state;
    if (!editorOpen) {
      const alternativeElmt = document.getElementById('alternative');
      const editorElmt = document.getElementById('editor');
      if (editorElmt && alternativeElmt) {
        editorElmt.classList.remove('d-block');
        editorElmt.classList.remove('show');
        editorElmt.classList.add('d-none');
        alternativeElmt.classList.remove('d-none');
        alternativeElmt.classList.add('d-block');
        alternativeElmt.classList.add('show');
      }
    }
  };

  render() {
    const { editorOpen } = this.state;
    const editorClass = classnames('editor fade', {
      hide: !editorOpen,
      show: editorOpen,
    });
    const alternativeClass = classnames('alternative d-none fade', {
      hide: editorOpen,
      show: !editorOpen,
    });
    return (
      <div className="App">
        <div id="editor" className={editorClass}>
          <TopBar toggleEditor={this.toggleEditor} />
          <MiddleBar />
          <FooterBar />
        </div>
        <div id="alternative" className={alternativeClass}>
          <div className="container">
            <h2>Oopsie...</h2>
            <p>
              Don't worry. I'm not offended. I knew you would try all the
              buttons. And particularly the closing one :)
            </p>
            <p>
              If you want, you can reopen my life editor by clicking here:{' '}
              <button
                type="button"
                className="d-inline-block btn--fake reset-button"
                onClick={evt => {
                  evt.preventDefault();
                  this.toggleEditor(true);
                }}
                title="Reopen editor"
              >
                <FaMagic /> <FaBackward /> <FaHandPeace />
              </button>
            </p>
            <p>
              If you got sick of reading some (beautiful) code, you can download
              my{' '}
              <a
                className="alternative--link"
                href="/assets/Vincent_Audebert_CV.pdf"
                title="PDF CV"
                target="_blank"
                rel="noreferrer noopener"
              >
                CV in a PDF format
              </a>
              .
            </p>
            <p>Vincent.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
