// @flow
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
