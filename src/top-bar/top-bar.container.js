// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import TopBar from './top-bar';
import type { fullFileType } from '../app/app.types';

type TopBarState = {
  currentFile: fullFileType,
};

const mapStateToProps = (state: TopBarState) => ({
  currentFile: state.currentFile,
});

const mapDispatchToProps = () => ({});

// wildcarding the time to get rid of Redux
export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar): React.AbstractComponent<*, *>);
