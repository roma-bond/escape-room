import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './header';

const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render Header correctly', () => {
    render(
      <Router history={history}>
        <Header />
      </Router>,
    );

    expect(screen.getByText(/Квесты/i)).toBeInTheDocument();
    expect(screen.getByText(/Новичкам/i)).toBeInTheDocument();
    expect(screen.getByText(/Акции/i)).toBeInTheDocument();
    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBe(6);
  });

  it('should redirect to root url when user clicks a link', async () => {
    history.push('/quest/5');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route path="/quest/5" exact>
            <Header />
          </Route>
        </Switch>
      </Router>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getAllByRole('link')[0]); // link to 'Root' page
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });

  it('should redirect to contacts url when user clicks a link', async () => {
    history.push('/');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/contacts" exact>
            <h1>This is Contacts page</h1>
          </Route>
          <Route path="/" exact>
            <Header />
          </Route>
        </Switch>
      </Router>,
    );

    await userEvent.click(screen.getAllByRole('link')[4]); // link to 'Contacts' page
    expect(screen.queryByText(/This is Contacts page/i)).toBeInTheDocument();
  });
});
