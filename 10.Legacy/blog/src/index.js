import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostShow from './components/PostShow';
import reducers from './reducers';
import history from './history';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="ui container">
        <Switch>
          <Route path="/posts/new" exact component={PostsNew} />
          <Route path="/posts/:id" exact component={PostShow} />
          <Route path="/" exact component={PostsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
