import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound from './not-found';

const history = createMemoryHistory();

describe('Component: NotFound', () => {
  it('should render NotFound correctly', () => {
    render(
      <Router history={history}>
        <NotFound />
      </Router>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicks a link', async () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
