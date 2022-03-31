import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestsAction } from '../../../../store/api-actions';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { AppRoute, levelMap, genreMap } from '../../../../const';
import { State } from '../../../../types/store';

const GENRE_LIST = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
];

const renderIcon = (genreCode: string | undefined) => {
  switch (genreCode) {
    case 'adventures':
      return <IconAdventures />;
    case 'horror':
      return <IconHorrors />;
    case 'mystic':
      return <IconMystic />;
    case 'detective':
      return <IconDetective />;
    case 'sci-fi':
      return <IconScifi />;
    default:
      return <IconAllQuests />;
  }
};

const QuestsCatalog = (): JSX.Element => {
  const quests = useSelector((state: State) => state.quests);

  const [sortByGenre, setSortByGenre] = useState('all');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchQuestsAction(sortByGenre));
  }, []);

  const sortHandler = (genre: string) => {
    const genreCode = genreMap.get(genre);
    if (genreCode && genreCode !== sortByGenre) {
      setSortByGenre(genreCode);
      history.push(`${AppRoute.Root}?genreFilter=${genreCode}`);
      dispatch(fetchQuestsAction(genreCode));
    }
  };

  return (
    <>
      <S.Tabs>
        {GENRE_LIST.map((genre, index) => {
          return (
            <S.TabItem key={`${genre}-${index}`}>
              <S.TabBtn
                isActive={genreMap.get(genre) === sortByGenre ? true : false}
                onClick={sortHandler.bind(this, genre)}
              >
                {renderIcon(genreMap.get(genre))}
                <S.TabTitle>{genre}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          );
        })}
      </S.Tabs>

      <S.QuestsList>
        {quests.map((quest) => (
          <S.QuestItem key={`quest-${quest.id}`}>
            <S.QuestItemLink to={`${AppRoute.Quest}/${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width="344"
                  height="232"
                  alt="квест Склеп"
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {`${quest.peopleCount.join('-')} чел`}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {levelMap.get(quest.level)}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
