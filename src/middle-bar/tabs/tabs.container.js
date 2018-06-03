// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tabs from './tabs';
import { closeFile } from '../../app/app.actions';
import type { fileType } from '../../app/app.types';

type TabsState = {
  openFiles: Array<fileType>,
};

const mapStateToProps = (state: TabsState) => ({
  openFiles: state.openFiles,
});

const mapDispatchToProps = (dispatch: Function) => ({
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
