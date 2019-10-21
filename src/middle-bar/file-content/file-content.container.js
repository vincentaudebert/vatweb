// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import FileContent from './file-content';
import type { fullFileType } from '../../app/app.types';

type FileContentState = {
  currentFile: fullFileType,
};

const mapStateToProps = (state: FileContentState) => ({
  currentFile: state.currentFile,
});

const mapDispatchToProps = () => ({});

// wildcarding the time to get rid of Redux
export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(FileContent): React.AbstractComponent<*, *>);
