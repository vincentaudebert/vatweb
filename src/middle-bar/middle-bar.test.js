import React from 'react';
import renderer from 'react-test-renderer';
import MiddleBar from './middle-bar';

jest.mock('./explorer/explorer.container', () => 'div');
jest.mock('./file-content/file-content.container', () => 'div');

describe('MiddleBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MiddleBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
