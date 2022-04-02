import { Quest } from './types/data';

export const getFilteredData = (data: Quest[], filter: string = 'all') =>
  filter === 'all' ? data : data.filter((quest) => quest.type === filter);
