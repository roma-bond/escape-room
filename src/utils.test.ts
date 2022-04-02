import { getFilteredData } from './utils';
import { makeFakeQuests } from './mocks';
import { faker } from '@faker-js/faker';
import { GENRE_CODE_LIST } from './const';

describe('Utility functions testing', () => {
  const mockQuests = makeFakeQuests();
  const type = faker.random.arrayElement(GENRE_CODE_LIST);
  const filteredQuests = mockQuests.filter((quest) => quest.type === type);

  it('getFiltered: should return all quests when no filter provided', () => {
    expect(getFilteredData(mockQuests)).toEqual(mockQuests);
  });

  it('getFiltered: should return filtered quests when filter provided', () => {
    expect(getFilteredData(mockQuests, type).length).toBe(
      filteredQuests.length,
    );
  });

  it('getFiltered: should return no quests when filter is not valid', () => {
    expect(getFilteredData(mockQuests, '&T%!@#$').length).toBe(0);
  });
});
