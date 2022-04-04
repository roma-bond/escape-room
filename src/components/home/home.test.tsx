import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from './home';

const middlewares = [thunk];
const history = createMemoryHistory();
const mockStore = configureMockStore(middlewares);

describe('Component: Home', () => {
  it('should render Home correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>,
    );

    expect(
      screen.queryByRole('heading', { name: 'Выберите тематику' }),
    ).toBeInTheDocument();
    expect(screen.queryByText('квесты в Санкт-Петербурге')).toBeInTheDocument();
  });
});
