import { getFilteredData, displayMapWithCustomMarker } from './utils';
import { makeFakeQuests } from './mocks';
import { faker } from '@faker-js/faker';
import { GENRE_CODE_LIST } from './const';

describe('Utility functions testing', () => {
  const mockQuests = makeFakeQuests();
  const type = faker.random.arrayElement(GENRE_CODE_LIST);
  const filteredQuests =
    type === 'all'
      ? mockQuests
      : mockQuests.filter((quest) => quest.type === type);

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

  it('displayMapWithCustomMarker: should create two script tags in a DOM', () => {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');
    displayMapWithCustomMarker(script1, script2);

    const DOMScripts = document.body.querySelectorAll('script');
    expect(DOMScripts.length).toBe(2);
    expect(DOMScripts[0].src.includes('https://api-maps.yandex.ru')).toBe(true);
    expect(DOMScripts[1].src.includes('ymaps.js')).toBe(true);
  });
});
