import styled, { css } from 'styled-components';
import { Link as RouterLink } from '../../components/common/common';

const Main = styled.main`
  max-width: 556px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 43.92vw;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font?.large};
  line-height: 95%;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color?.white};
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const Link = styled(RouterLink)`
  display: block;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font?.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color?.whiteSmoke};

  ${({ $isActiveLink }) =>
    $isActiveLink &&
    css`
      color: ${({ theme }) => theme.color?.tangerine};
    `}

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color?.tangerine};
  }
`;

export {
  Main,
  PageTitle,
  Link
};
