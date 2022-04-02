import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { APIRoute } from '../const';
import { State } from '../types/store';
import { fetchQuestsAction, fetchQuestAction } from './api-actions';
import { loadQuests, resetState } from './actions';
import { makeFakeQuests } from '../mocks';

const mockQuests = makeFakeQuests();

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should dispatch loadQuests when GET /quests', async () => {
    mockAPI.onGet(APIRoute.Quests).reply(200, mockQuests);

    const store = mockStore();
    await store.dispatch(fetchQuestsAction());

    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toContain('data/fetchQuests/pending');
    expect(actions).toContain('data/resetState');
    expect(actions).toContain('data/loadQuests');
    expect(actions).toContain('data/fetchQuests/fulfilled');
  });

  it('should dispatch loadQuest when GET /quests/:id', async () => {
    const id = 5;
    mockAPI.onGet(`${APIRoute.Quests}/${id}`).reply(200, mockQuests[id]);

    const store = mockStore();
    await store.dispatch(fetchQuestAction(id));

    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toContain('data/fetchQuest/pending');
    expect(actions).toContain('data/resetState');
    expect(actions).toContain('data/loadQuest');
    expect(actions).toContain('data/fetchQuest/fulfilled');
  });
});
