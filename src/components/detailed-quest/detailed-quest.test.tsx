import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import DetailedQuest from './detailed-quest';
import { makeFakeQuests } from '../../mocks';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Component: DetailedQuest', () => {
  it('should render "DetailedQuest" when user navigates to /quest/:id and data is loaded', () => {
    const history = createMemoryHistory();
    const id = 4;
    history.push(`/quest/${id}`);
    const quest = makeFakeQuests()[id];

    render(
      <Provider
        store={mockStore({
          quests: [],
          quest,
          isDataLoaded: true,
        })}
      >
        <Router history={history}>
          <DetailedQuest />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Забронировать/i)).toBeInTheDocument();
    expect(screen.getByText(quest.title)).toBeInTheDocument();
    expect(screen.getByText(`${quest.duration} мин`)).toBeInTheDocument();
    expect(screen.getByText(quest.description)).toBeInTheDocument();
  });

  it('should render "DetailedQuest" when user navigates to /quest/:id and data is not loaded', () => {
    const history = createMemoryHistory();
    const id = 4;
    history.push(`/quest/${id}`);
    const quest = makeFakeQuests()[id];

    render(
      <Provider
        store={mockStore({
          quests: [],
          quest,
          isDataLoaded: false,
        })}
      >
        <Router history={history}>
          <DetailedQuest />
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Забронировать/i)).not.toBeInTheDocument();
    expect(screen.queryByText(quest.title)).not.toBeInTheDocument();
    expect(screen.queryByText(`${quest.duration} мин`)).not.toBeInTheDocument();
    expect(screen.queryByText(quest.description)).not.toBeInTheDocument();
  });
});
