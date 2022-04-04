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
import { AppRoute, levelMap, genreMap, GENRE_LIST } from '../../../../const';
import { State } from '../../../../types/store';
import { Backdrop, CircularProgress } from '@mui/material';

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
  const { quests, isDataLoaded } = useSelector((state: State) => state);

  const [sortByGenre, setSortByGenre] = useState('all');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    history.push(`${AppRoute.Root}?genreFilter=${sortByGenre}`);
    dispatch(fetchQuestsAction(sortByGenre));
  }, [sortByGenre, history, dispatch]);

  if (!isDataLoaded) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  const sortHandler = (genre: string) => {
    const genreCode = genreMap.get(genre);
    if (genreCode && genreCode !== sortByGenre) {
      setSortByGenre(genreCode);
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
                data-testid={`btn-${genre}`}
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
                  alt={`квест ${quest.title}`}
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
