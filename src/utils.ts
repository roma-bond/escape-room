import { Quest } from './types/data';

export const getFilteredData = (data: Quest[], filter: string = 'all') =>
  filter === 'all' ? data : data.filter((quest) => quest.type === filter);

export const displayMapWithCustomMarker = (
  script1: HTMLScriptElement,
  script2: HTMLScriptElement,
) => {
  script1.src =
    'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>';
  script1.async = true;
  document.body.appendChild(script1);

  script2.src = './ymaps.js';
  script2.async = true;
  document.body.appendChild(script2);
};
