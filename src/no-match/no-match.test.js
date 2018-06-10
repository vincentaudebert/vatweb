import React from 'react';
import renderer from 'react-test-renderer';
import NoMatch from './no-match';

describe('No Match', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoMatch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
