// @flow
import { connect } from 'react-redux';
import TopBar from './top-bar';
import type { fileType, fullFileType } from '../app/app.types';

type TopBarState = {
  currentFile: fullFileType,
  openFiles: Array<fileType>,
};

const mapStateToProps = (state: TopBarState) => ({
  currentFile: state.currentFile,
  openFiles: state.openFiles,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
