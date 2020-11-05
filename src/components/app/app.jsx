import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "@components/main-screen/main-screen";
import SignInScreen from "@components/sign-in-screen/sign-in-screen";
import FavoritesScreen from "@components/favorites-screen/favorites-screen";
import RoomScreen from "@components/room-screen/room-screen";
import withActiveCard from "@hocs/with-active-card/with-active-card";

const RoomScreenWrapped = withActiveCard(RoomScreen);

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreenWrapped />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
