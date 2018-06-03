import { connect } from 'react-redux';
import FileContent from './file-content';

const mapStateToProps = (state, ownProps) => {
  return {
    openFiles: state.openFiles,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileContent);
