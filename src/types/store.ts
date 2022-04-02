import { Quest } from './data';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import store from '../store/store';

export type State = {
  quests: Quest[];
  quest: Quest | null;
  isDataLoaded: boolean;
};

export enum ActionType {
  LoadQuests = 'data/loadQuests',
  LoadQuest = 'data/loadQuest',
  ResetState = 'data/resetState',
}

export type LoadQuests = {
  type: ActionType.LoadQuests;
  payload: Quest[];
};

export type LoadQuest = {
  type: ActionType.LoadQuest;
  payload: Quest | null;
};

export type ResetState = {
  type: ActionType.ResetState;
};

export type Actions = LoadQuests | LoadQuest | ResetState;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Actions
>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type AppDispatch = typeof store.dispatch;
