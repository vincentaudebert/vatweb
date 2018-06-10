import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
/* eslint-disable import/no-extraneous-dependencies */
import { MemoryRouter } from 'react-router';
/* eslint-enable import/no-extraneous-dependencies */
import Explorer from './explorer';
import config from '../../config/config';

const routerWrapper = explorer => (
  <MemoryRouter keyLength={0}>{explorer}</MemoryRouter>
);

describe('Explorer', () => {
  let currentFile;

  beforeEach(() => {
    [currentFile] = config.filter(item => item.name === 'welcome.json');
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(routerWrapper(<Explorer currentFile={currentFile} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with currentFile undefined', () => {
    const tree = renderer
      .create(routerWrapper(<Explorer currentFile={undefined} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('explorer button toggles explorer', () => {
    const explorer = mount(
      routerWrapper(<Explorer currentFile={currentFile} />)
    );
    const explorerInstance = explorer.find(Explorer).instance();
    expect(explorerInstance.state.expandExplorer).toBeTruthy();
    explorer.find('button.explorer--open').simulate('click');
    expect(explorerInstance.state.expandExplorer).toBeFalsy();

    expect(explorer).toMatchSnapshot();
  });

  it('folder button toggles folder', () => {
    const explorer = mount(
      routerWrapper(<Explorer currentFile={currentFile} />)
    );
    const explorerInstance = explorer.find(Explorer).instance();
    expect(explorerInstance.state.expandFolder).toBeTruthy();
    explorer.find('button.btn--folder').simulate('click');
    expect(explorerInstance.state.expandFolder).toBeFalsy();

    expect(explorer).toMatchSnapshot();
  });

  it('active file being within a folder', () => {
    [currentFile] = config.filter(item => item.name === '1-apocope.js');

    const explorer = mount(
      routerWrapper(<Explorer currentFile={currentFile} />)
    );
    const explorerInstance = explorer.find(Explorer).instance();
    expect(explorerInstance.state.expandFolder).toBeTruthy();
    explorer.find('button.btn--folder').simulate('click');
    expect(explorerInstance.state.expandFolder).toBeFalsy();

    expect(explorer).toMatchSnapshot();
  });
});
