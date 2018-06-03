// @flow
import { connect } from 'react-redux';
import FileContent from './file-content';
import type { fileType, fullFileType } from '../../app/app.types';

type FileContentState = {
  currentFile: fullFileType,
  openFiles: fileType,
};

const mapStateToProps = (state: FileContentState) => {
  return {
    currentFile: state.currentFile,
    openFiles: state.openFiles,
  };
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileContent);
