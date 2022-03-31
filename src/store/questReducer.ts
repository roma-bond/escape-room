import { Actions, ActionType, State } from '../types/store';

export const questReducerInitialState: State = {
  quests: [],
};

const questReducer = (
  state = questReducerInitialState,
  action: Actions,
): State => {
  switch (action.type) {
    case ActionType.LoadQuests:
      return {
        ...state,
        quests: action.payload,
      };
    default:
      return state;
  }
};

export default questReducer;
