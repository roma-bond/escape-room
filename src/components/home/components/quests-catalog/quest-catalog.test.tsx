import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import QuestCatalog from './quests-catalog';
import { makeFakeQuests } from '../../../../mocks';
import { GENRE_LIST } from '../../../../const';

const middlewares = [thunk];
const history = createMemoryHistory();
const mockStore = configureMockStore(middlewares);
const quests = makeFakeQuests();

describe('Component: QuestCatalog', () => {
  it('should render QuestCatalog correctly', () => {
    render(
      <Provider store={mockStore({ quests, isDataLoaded: true })}>
        <Router history={history}>
          <QuestCatalog />
        </Router>
      </Provider>,
    );

    GENRE_LIST.forEach((genre) => {
      const btn = screen.getByTestId(`btn-${genre}`);
      expect(btn).toBeInTheDocument();
    });

    quests.forEach((quest) => {
      expect(
        screen.getByRole('img', { name: `квест ${quest.title}` }),
      ).toBeInTheDocument();
    });
  });

  it('should render spinner when data is not loaded', () => {
    render(
      <Provider store={mockStore({ quests, isDataLoaded: false })}>
        <Router history={history}>
          <QuestCatalog />
        </Router>
      </Provider>,
    );

    GENRE_LIST.forEach((genre) => {
      expect(screen.queryByTestId(`btn-${genre}`)).not.toBeInTheDocument();
    });

    quests.forEach((quest) => {
      expect(
        screen.queryByRole('img', { name: `квест ${quest.title}` }),
      ).not.toBeInTheDocument();
    });
  });
});
