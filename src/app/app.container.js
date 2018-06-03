// @flow

import { connect } from 'react-redux';
import App from './app';
import { changeFile } from './app.actions';

const mapStateToProps = (state: { wantedLocation: ?string }) => ({
  wantedLocation: state.wantedLocation,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeFile: (slug: string) => {
    dispatch(changeFile(slug));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
