// @flow
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileContent);
