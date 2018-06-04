// @flow
import { connect } from 'react-redux';
import Explorer from './explorer';
import type { fileType, fullFileType } from '../../app/app.types';

type ExplorerState = {
  currentFile: fullFileType,
  openFiles: Array<fileType>,
};

const mapStateToProps = (state: ExplorerState) => ({
  currentFile: state.currentFile,
  openFiles: state.openFiles,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer);
