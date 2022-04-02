import { faker } from '@faker-js/faker';
import { Quest } from './types/data';
import { GENRE_CODE_LIST } from './const';

export const makeFakeQuests = () => {
  return new Array(10).fill(null).map(
    () =>
      ({
        id: faker.datatype.number(),
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        previewImg: faker.system.filePath(),
        coverImg: faker.system.filePath(),
        type: faker.random.arrayElement(GENRE_CODE_LIST),
        level: faker.name.title(),
        peopleCount: [faker.datatype.number(), faker.datatype.number()],
        duration: faker.datatype.number(),
      } as Quest),
  );
};
