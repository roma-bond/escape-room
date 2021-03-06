import { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { fetchQuestAction } from '../../store/api-actions';
import { genreEnglishMap, levelMap } from '../../const';
import { State } from '../../types/store';
import { Backdrop, CircularProgress } from '@mui/material';

interface QuestParams {
  questId: string;
}

const DetailedQuest = (): JSX.Element => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const { questId }: QuestParams = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestAction(+questId));
  }, [dispatch, questId]);

  const state = useSelector((state: State) => state);
  const { quest, isDataLoaded } = state;

  if (!isDataLoaded || !quest) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (!quest && isDataLoaded) {
    return <Redirect to="/*" />;
  }

  const clickBookingHandler = () => {
    setIsBookingModalOpened(true);
  };

  const closeModalHandler = () => {
    setIsBookingModalOpened(false);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{genreEnglishMap.get(quest.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount.join(
                  '-',
                )} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{levelMap.get(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{quest.description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={clickBookingHandler}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && (
          <BookingModal
            peopleCount={quest.peopleCount}
            onModalClose={closeModalHandler}
          />
        )}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
