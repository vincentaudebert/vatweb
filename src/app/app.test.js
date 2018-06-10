import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from './app';

jest.mock('../middle-bar/middle-bar.js', () => 'div');
jest.mock('../top-bar/top-bar.container.js', () => 'div');
jest.mock('../footer-bar/footer-bar.js', () => 'div');
jest.mock('react-ga', () => ({
  pageview: () => {},
}));

describe('App', () => {
  let changeFile;
  let match;
  let history;

  beforeEach(() => {
    changeFile = jest.fn();
    match = {
      params: {
        slug: 'me.js',
      },
    };

    history = {
      push: jest.fn(),
    };

    const div = document.createElement('div');
    window.domNode = div;
    document.body.appendChild(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<App changeFile={changeFile} match={match} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with no slug', () => {
    match = {
      params: {},
    };
    const tree = renderer
      .create(<App changeFile={changeFile} match={match} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('behaves correctly after wantedLocation update', () => {
    const app = mount(
      <App changeFile={changeFile} match={match} history={history} />
    );
    expect(changeFile).toHaveBeenCalledTimes(1);

    app.setProps({
      wantedLocation: '1-apocope.js',
    });

    expect(history.push).toHaveBeenCalledTimes(1);
  });

  it('behaves correctly after no slug update', () => {
    const app = mount(
      <App changeFile={changeFile} match={match} history={history} />
    );
    expect(changeFile).toHaveBeenCalledTimes(1);

    app.setProps({
      match: { params: {} },
    });

    expect(changeFile).toHaveBeenCalledTimes(2);
  });

  it('hide/show editor', () => {
    const app = mount(<App changeFile={changeFile} match={match} />);
    expect(app.instance().state.editorOpen).toBeTruthy();
    app.instance().toggleEditor(false);
    expect(app.instance().state.editorOpen).toBeFalsy();

    app.find('button.btn--fake').simulate('click');
    expect(app.instance().state.editorOpen).toBeTruthy();
  });

  it('hidden editor', () => {
    const app = mount(<App changeFile={changeFile} match={match} />);
    app.setState({
      editorOpen: false,
    });
    expect(app).toMatchSnapshot();
  });

  it('test animation end function', () => {
    const app = mount(<App changeFile={changeFile} match={match} />, {
      attachTo: window.domNode,
    });
    app.setState({
      editorOpen: false,
    });
    app.instance().editorAnimationEnd();
    expect(app.render()).toMatchSnapshot();
  });

  it('test animation end function not triggered if editor is open', () => {
    const app = mount(<App changeFile={changeFile} match={match} />, {
      attachTo: window.domNode,
    });
    app.setState({
      editorOpen: true,
    });
    app.instance().editorAnimationEnd();
    expect(app.render()).toMatchSnapshot();
  });
});
