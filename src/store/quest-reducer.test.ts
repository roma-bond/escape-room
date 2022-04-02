import questReducer, { questReducerInitialState } from './quest-reducer';
import { loadQuests, loadQuest, resetState } from './actions';
import { makeFakeQuests } from '../mocks';

const mockQuests = makeFakeQuests();

describe('Reducer: questReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(questReducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      quests: [],
      quest: null,
      isDataLoaded: false,
    });
  });

  it('should update quests in store by loadQuests', () => {
    const state = questReducerInitialState;
    expect(questReducer(state, loadQuests(mockQuests))).toEqual({
      ...state,
      quests: mockQuests,
      isDataLoaded: true,
    });
  });

  it('should update quest in store by loadQuest', () => {
    const state = questReducerInitialState;
    expect(questReducer(state, loadQuest(mockQuests[0]))).toEqual({
      ...state,
      quest: mockQuests[0],
      isDataLoaded: true,
    });
  });

  it('should reset store after quests were loaded by resetState', () => {
    const state = {
      quests: mockQuests,
      quest: null,
      isDataLoaded: true,
    };
    expect(questReducer(state, resetState())).toEqual(questReducerInitialState);
  });

  it('should reset store after quest was loaded by resetState', () => {
    const state = {
      quests: [],
      quest: mockQuests[0],
      isDataLoaded: true,
    };
    expect(questReducer(state, resetState())).toEqual(questReducerInitialState);
  });
});
