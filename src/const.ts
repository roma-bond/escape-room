export enum AppRoute {
  Root = '/',
  Quest = '/quest',
  Contacts = '/contacts',
}

export enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export const levelMap = new Map([
  ['hard', 'сложный'],
  ['medium', 'средний'],
  ['easy', 'легкий'],
]);

export const genreMap = new Map([
  ['Все квесты', 'all'],
  ['Приключения', 'adventures'],
  ['Ужасы', 'horror'],
  ['Мистика', 'mystic'],
  ['Детектив', 'detective'],
  ['Sci-fi', 'sci-fi'],
]);

export const genreEnglishMap = new Map([
  ['all', 'Все квесты'],
  ['adventures', 'Приключения'],
  ['horror', 'Ужасы'],
  ['mystic', 'Мистика'],
  ['detective', 'Детектив'],
  ['sci-fi', 'Sci-fi'],
]);
