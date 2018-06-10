import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TopBar from './top-bar';

describe('TopBar', () => {
  let currentFile;
  let toggleEditor;

  beforeEach(() => {
    toggleEditor = jest.fn();
    currentFile = {
      name: 'Test Name',
      content: 'Test Content',
      inFolder: false,
      language: 'react',
      type: 'file',
    };
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<TopBar currentFile={currentFile} toggleEditor={toggleEditor} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with undefined currentFile', () => {
    currentFile = undefined;
    const tree = renderer
      .create(<TopBar currentFile={currentFile} toggleEditor={toggleEditor} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('close button toggles editor', () => {
    const topBar = shallow(
      <TopBar currentFile={currentFile} toggleEditor={toggleEditor} />
    );
    topBar.find('button.top-bar__btn--close').simulate('click');

    expect(toggleEditor).toHaveBeenCalled();
  });
});
