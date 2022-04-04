import { AppRoute } from '../../const';
import * as S from './not-found.styled';

const NotFound = (): JSX.Element => {
  return (
    <S.Main>
      <S.PageTitle>404 - Page not found</S.PageTitle>
      <S.Link to={AppRoute.Root}>Home</S.Link>
    </S.Main>
  );
};

export default NotFound;
