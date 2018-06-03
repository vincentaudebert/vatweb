import { connect } from 'react-redux';
import TopBar from './top-bar';

const mapStateToProps = (state, ownProps) => {
  return {
    openFiles: state.openFiles,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
