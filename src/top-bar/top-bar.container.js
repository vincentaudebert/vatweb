import { connect } from 'react-redux';
import TopBar from './top-bar';
import type { fileType, fullFileType } from '../../app/app.types';

type TopBarState = {
  currentFile: fullFileType,
  openFiles: fileType,
};

const mapStateToProps = (state: TopBarState) => {
  return {
    currentFile: state.currentFile,
    openFiles: state.openFiles,
  };
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
