// @flow
import { connect } from 'react-redux';
import FileContent from './file-content';
import type { fileType, fullFileType } from '../../app/app.types';

type FileContentState = {
  currentFile: fullFileType,
  openFiles: Array<fileType>,
};

const mapStateToProps = (state: FileContentState) => ({
  currentFile: state.currentFile,
  openFiles: state.openFiles,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileContent);
