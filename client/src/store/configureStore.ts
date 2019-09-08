// import 'rxjs';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './modules';

export default function configureStore() {


  // devtool settings
  const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({
    latency: 1000,
    maxAge: 500,
  }) : composeWithDevTools({});

  const store = createStore(
    rootReducer,
    composeEnhancers(),
  );

  return store;
}
