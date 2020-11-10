import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainScreen from "@components/main-screen/main-screen";
import SignInScreen from "@components/sign-in-screen/sign-in-screen";
import FavoritesScreen from "@components/favorites-screen/favorites-screen";
import RoomScreen from "@components/room-screen/room-screen";
import withActiveCard from "@hocs/with-active-card/with-active-card";
import PrivateRoute from "@components/private-route/private-route";
import browserHistory from "@src/browser-history";
import {AppRoute} from "@src/const";

const RoomScreenWrapped = withActiveCard(RoomScreen);

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesScreen />
            );
          }}
        />
        <Route exact path={AppRoute.OFFER}>
          <RoomScreenWrapped />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
