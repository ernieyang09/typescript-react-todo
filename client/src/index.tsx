import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from "./App";

import configureStore from './store';

const store = configureStore();

const APP = () => (
  <Provider store={store}>
    <App />
  </Provider>
  
);

render(<APP />, document.getElementById('root'));
