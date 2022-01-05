import React from 'react';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {ConfigProvider} from 'antd';
import logger from 'redux-logger';

import RootContainer from './root';
import reducers from './reducers';
import rootSaga from './sagas';

const
  sagaMiddleware = createSagaMiddleware(),
  reduxMiddlewares = [];

reduxMiddlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  reduxMiddlewares.push(logger);
}

const store = createStore(combineReducers(reducers), undefined, compose(applyMiddleware(...reduxMiddlewares)));

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <ConfigProvider
          getPopupContainer={node => {
            if (node) {
              return node.parentNode;
            }
            return document.body;
          }}
        >
          <RootContainer />
        </ConfigProvider>
      </Provider>
    )
  }
}

export default App;
