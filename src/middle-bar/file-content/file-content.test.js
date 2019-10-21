import React from 'react';
import renderer from 'react-test-renderer';
import FileContent from './file-content';
import config from '../../config/config';

jest.mock('../tabs/tabs.container', () => 'div');
jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  atomDark: undefined,
}));

describe('FileContent', () => {
  let currentFile;

  beforeEach(() => {
    [currentFile] = config.filter(item => item.name === 'welcome.json');
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<FileContent currentFile={currentFile} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with undefined file', () => {
    const tree = renderer
      .create(<FileContent currentFile={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
