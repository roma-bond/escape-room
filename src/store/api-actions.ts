import { ThunkActionResult } from '../types/store';
import { loadQuests } from './actions';
import { APIRoute } from '../const';
import { Quest } from '../types/data';

export const fetchQuestsAction =
  (genreFilter = 'all'): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<Quest[]>(APIRoute.Quests);
      if (data) {
        const filteredData =
          genreFilter === 'all'
            ? data
            : data.filter((quest) => quest.type === genreFilter);
        dispatch(loadQuests(filteredData));
      }
    } catch (e) {
      dispatch(loadQuests([]));
    }
  };
