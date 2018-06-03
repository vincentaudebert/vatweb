// @flow
import constants from './app.constants';
import config from '../config/config';
import { getFromSlug } from '../utilities';

const defaultState = {
  currentFile: config.filter(item => item.name === 'welcome.json')[0],
  openFiles: [
    {
      name: 'welcome.json',
      active: true,
    },
  ],
  wantedLocation: undefined,
};

const resetOpenFiles = (openFiles, slug) => {
  return openFiles.map(file => {
    file.active = file.name === slug;
    return file;
  });
};

const changeFile = (previousState, payload) => {
  const { slug } = payload;

  // if filename invalid, we don't change anything
  if (
    config.filter(item => {
      return item.type === 'file' && item.name === slug;
    }).length === 0
  )
    return previousState;

  const fileIsAlreadyOpen = getFromSlug(previousState.openFiles, slug);

  const newOpenFiles = resetOpenFiles(previousState.openFiles, slug);
  const currentFile = getFromSlug(config, slug);

  if (fileIsAlreadyOpen) {
    return {
      ...previousState,
      currentFile,
      openFiles: newOpenFiles,
      wantedLocation: undefined,
    };
  }

  newOpenFiles.push({
    name: slug,
    active: true,
  });

  return {
    ...previousState,
    currentFile,
    openFiles: newOpenFiles,
    wantedLocation: undefined,
  };
};

const closeFile = (previousState, payload) => {
  const { slug } = payload;

  const newOpenFiles = resetOpenFiles(previousState.openFiles, slug).filter(
    item => item.name !== slug
  );

  // we just make sure we activate the last file in the list
  const lastFile = newOpenFiles[newOpenFiles.length - 1];
  let currentFile;
  if (lastFile) {
    lastFile.active = true;
    currentFile = getFromSlug(config, lastFile.name); // for now we always have at least a file opened
  }

  return {
    ...previousState,
    currentFile,
    openFiles: newOpenFiles,
    wantedLocation: lastFile ? lastFile.name : undefined,
  };
};

export const appReducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_FILE:
      return changeFile(previousState, action.payload);
    case constants.CLOSE_FILE:
      return closeFile(previousState, action.payload);
    default:
      return previousState;
  }
};

export default appReducer;
