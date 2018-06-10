import React from 'react';
import renderer from 'react-test-renderer';
import FooterBar from './footer-bar';

describe('FooterBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FooterBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
