import { ThemeProvider } from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../const';
import { appTheme } from './common';
import * as S from './app.styled';
// import axios from 'axios';

const App = (): JSX.Element => {
  // const makeRequest2 = () => {
  //   axios
  //     .post('http://localhost:3001/orders', {
  //       name: 'Roman',
  //       peopleCount: 4,
  //       phone: '91869526839',
  //       isLegal: true,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //       console.log(JSON.parse(error.response.request.responseText));
  //     });
  // };

  // makeRequest2();
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={`${AppRoute.Quest}/:questId`}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.Root}>
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
