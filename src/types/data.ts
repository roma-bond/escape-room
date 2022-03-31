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

type Level = 'hard' | 'medium' | 'easy';

type Genre = 'horror' | 'mystic' | 'detective' | 'adventures' | 'sci-fi';

type Duration = 60 | 90 | 120;
