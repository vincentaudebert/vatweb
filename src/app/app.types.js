// @flow

export type fullFileType = {
  name: string,
  content: string,
  type: string,
  language: string,
  inFolder: boolean,
};

export type folderType = {
  name: string,
  type: string,
};

export type fileType = {
  name: string,
  active: boolean,
};
