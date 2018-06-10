import React from 'react';
import renderer from 'react-test-renderer';
/* eslint-disable import/no-extraneous-dependencies */
import { MemoryRouter } from 'react-router';
/* eslint-enable import/no-extraneous-dependencies */
import { mount } from 'enzyme';
import Tabs from './tabs';

const routerWrapper = explorer => (
  <MemoryRouter keyLength={0}>{explorer}</MemoryRouter>
);

describe('Tabs', () => {
  let openFiles;
  const closeFile = jest.fn();

  beforeEach(() => {
    openFiles = [
      {
        name: 'welcome.json',
        active: true,
      },
      {
        name: 'me.js',
        active: false,
      },
      {
        name: '1-apocope.js',
        active: false,
      },
    ];
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        routerWrapper(<Tabs openFiles={openFiles} closeFile={closeFile} />)
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with no open files', () => {
    openFiles = [];
    const tree = renderer
      .create(
        routerWrapper(<Tabs openFiles={openFiles} closeFile={closeFile} />)
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('close file button works', () => {
    const tabs = mount(
      routerWrapper(<Tabs openFiles={openFiles} closeFile={closeFile} />)
    );
    tabs
      .find('button')
      .first()
      .simulate('click');

    expect(closeFile).toHaveBeenCalled();
  });

  it('filter out invalid openFiles', () => {
    openFiles[0].name = 'invalid name';
    const tabs = mount(
      routerWrapper(<Tabs openFiles={openFiles} closeFile={closeFile} />)
    );
    const tabItems = tabs.find('div.tab');
    expect(tabItems.length).toBe(2);
    expect(tabs).toMatchSnapshot();
  });
});
