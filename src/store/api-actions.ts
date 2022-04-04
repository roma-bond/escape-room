import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadQuests, loadQuest, resetState } from './actions';
import { APIRoute } from '../const';
import { Quest } from '../types/data';
import { State, AppDispatch } from '../types/store';
import { AxiosInstance } from 'axios';
import { getFilteredData } from '../utils';

export const fetchQuestsAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuests', async (genreFilter = 'all', { dispatch, extra: api }) => {
  dispatch(resetState());
  try {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    if (data) {
      const filteredByGenreData = getFilteredData(data, genreFilter);
      dispatch(loadQuests(filteredByGenreData));
    }
  } catch (e) {
    dispatch(loadQuests([]));
  }
});

export const fetchQuestAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuest', async (id, { dispatch, extra: api }) => {
  dispatch(resetState());
  try {
    const { data } = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
    if (data) {
      dispatch(loadQuest(data));
    }
  } catch (e) {
    dispatch(loadQuest(null));
  }
});
