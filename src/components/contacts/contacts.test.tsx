import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Contacts from './contacts';

const history = createMemoryHistory();

describe('Component: Contacts', () => {
  it('should render Contacts correctly', () => {
    render(
      <Router history={history}>
        <Contacts />
      </Router>,
    );

    expect(screen.getByText(/квесты в Санкт-Петербурге/i)).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: 'мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5',
      }),
    ).toBeInTheDocument();
  });
});
