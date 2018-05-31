import React, { Component } from 'react';
import TopBar from '../TopBar/top-bar.container';
import MiddleBar from '../MiddleBar/middle-bar';
import FooterBar from '../FooterBar/footer-bar';
import classnames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorOpen: true,
    };
    this.toggleEditor = this.toggleEditor.bind(this);
  }

  componentDidMount() {
    const slug = this.props.match.params.slug || 'welcome.json';
    this.props.changeFile(slug);
  }

  componentDidUpdate() {
    const { match, wantedLocation, changeFile, history } = this.props;
    let slug = match.params.slug || 'welcome.json';

    // if file just got close we want to change url to last file open
    if (wantedLocation && wantedLocation !== slug) history.push(wantedLocation);
    else changeFile(slug);
  }

  toggleEditor(value) {
    this.setState({
      editorOpen: value,
    });
  }

  render() {
    const editorClass = classnames('editor fade', {
      hide: !this.state.editorOpen,
      show: this.state.editorOpen,
    });
    return (
      <div className="App">
        <div className={editorClass}>
          <TopBar toggleEditor={this.toggleEditor} />
          <MiddleBar />
          <FooterBar />
        </div>
      </div>
    );
  }
}

export default App;
