import { connect } from 'react-redux';
import Tabs from './tabs';
import { closeFile } from '../../app/app.actions';
import { withRouter } from 'react-router-dom';
import { fileType } from '../../app/app.types';

type TabsState = {
  openFiles: fileType,
};

const mapStateToProps = (state: TabsState) => {
  return {
    openFiles: state.openFiles,
  };
};

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
