// @flow
import constants from './app.constants';

export const changeFile = (slug: string): Object => ({
  type: constants.CHANGE_FILE,
  payload: {
    slug,
  },
});

export const closeFile = (slug: string): Object => ({
  type: constants.CLOSE_FILE,
  payload: {
    slug,
  },
});
