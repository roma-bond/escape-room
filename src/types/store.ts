import { Quest } from './data';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';

export type State = {
  quests: Quest[];
};

export enum ActionType {
  LoadQuests = 'data/loadQuests',
}

export type LoadQuests = {
  type: ActionType.LoadQuests;
  payload: Quest[];
};

export type Actions = LoadQuests;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Actions
>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
