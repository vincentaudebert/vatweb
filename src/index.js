import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './css/base.css';
import App from './app/app.container';
import NoMatch from './no-match/no-match';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/file/:slug" component={App} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

const provider = <Provider store={store}>{router}</Provider>;
ReactDOM.render(provider, document.getElementById('root'));
registerServiceWorker();
