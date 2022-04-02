import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/store';
import { Quest } from '../types/data';

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests: Quest[]) => ({
    payload: {
      quests,
    },
  }),
);

export const loadQuest = createAction(
  ActionType.LoadQuest,
  (quest: Quest | null) => ({
    payload: {
      quest,
    },
  }),
);

export const resetState = createAction(ActionType.ResetState);
