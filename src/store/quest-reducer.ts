import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuest, resetState } from './actions';
import { State } from '../types/store';

export const questReducerInitialState: State = {
  quests: [],
  quest: null,
  isDataLoaded: false,
};

const questReducer = createReducer(questReducerInitialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      const { quests } = action.payload;

      state.quests = quests;
      state.isDataLoaded = true;
    })
    .addCase(loadQuest, (state, action) => {
      const { quest } = action.payload;

      state.quest = quest;
      state.isDataLoaded = true;
    })
    .addCase(resetState, (state, action) => {
      state.quests = [];
      state.quest = null;
      state.isDataLoaded = false;
    });
});

export default questReducer;
