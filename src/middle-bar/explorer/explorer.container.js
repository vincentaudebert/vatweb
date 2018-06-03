// @flow
import { connect } from 'react-redux';
import Explorer from './explorer';

type ExplorerState = {
  currentFile: fullFileType,
  openFiles: fileType,
};

const mapStateToProps = (state: ExplorerState) => {
  return {
    currentFile: state.currentFile,
    openFiles: state.openFiles,
  };
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer);
