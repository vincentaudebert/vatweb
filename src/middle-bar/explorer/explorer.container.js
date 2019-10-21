// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Explorer from './explorer';
import type { fullFileType } from '../../app/app.types';

type ExplorerState = {
  currentFile: fullFileType,
};

const mapStateToProps = (state: ExplorerState) => ({
  currentFile: state.currentFile,
});

const mapDispatchToProps = () => ({});

// wildcarding the time to get rid of Redux
export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer): React.AbstractComponent<*, *>);
