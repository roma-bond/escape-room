import { Actions, ActionType, LoadQuests } from '../types/store';
import { Quest } from '../types/data';

export const loadQuests = (quests: Quest[]): LoadQuests => {
  return {
    type: ActionType.LoadQuests,
    payload: quests,
  };
};
