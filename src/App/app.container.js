import { connect } from 'react-redux';
import App from './app';
import { changeFile } from './app.actions';

const mapStateToProps = (state, ownProps) => ({
  wantedLocation: state.wantedLocation,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeFile: slug => {
      dispatch(changeFile(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
