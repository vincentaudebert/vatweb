import { connect } from 'react-redux';
import Tabs from './tabs';
import { closeFile } from '../../App/app.actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    openFiles: state.openFiles,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeFile: (openFiles, slug) => {
    dispatch(closeFile(slug));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Tabs)
);
