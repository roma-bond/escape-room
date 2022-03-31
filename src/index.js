import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from 'components/app/app';

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
