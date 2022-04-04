import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MainLayout from './main-layout';

const history = createMemoryHistory();

describe('Component: MainLayout', () => {
  it('should render MainLayout correctly', () => {
    const someText = 'Layout data';
    const someJSX = <p>{someText}</p>;
    render(
      <Router history={history}>
        <MainLayout>{someJSX}</MainLayout>
      </Router>,
    );

    expect(screen.getByText(`${someText}`)).toBeInTheDocument();
  });
});
