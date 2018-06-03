import { connect } from 'react-redux';
import Explorer from './explorer';

const mapStateToProps = (state, ownProps) => {
  return {
    currentFile: state.currentFile,
    openFiles: state.openFiles,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer);
