export type Quest = {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  type: Genre;
  level: Level;
  peopleCount: number[];
  duration: Duration;
};

export interface OrderPost {
  name: string;
  phone: string;
  peopleCount: number;
  isLegal: boolean;
}

type Level = 'hard' | 'medium' | 'easy';

export type Genre =
  | 'all'
  | 'horror'
  | 'mystic'
  | 'detective'
  | 'adventures'
  | 'sci-fi';

type Duration = 60 | 90 | 120;
