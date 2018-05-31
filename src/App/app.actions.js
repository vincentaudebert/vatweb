import constants from './app.constants';

export const changeFile = slug => {
  return {
    type: constants.CHANGE_FILE,
    payload: {
      slug,
    },
  };
};

export const closeFile = slug => {
  return {
    type: constants.CLOSE_FILE,
    payload: {
      slug,
    },
  };
};
