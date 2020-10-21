import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "components/main-screen/main-screen";
import SignInScreen from "components/sign-in-screen/sign-in-screen";
import FavoritesScreen from "components/favorites-screen/favorites-screen";
import RoomScreen from "components/room-screen/room-screen";
import {offersPropType, reviewsPropType} from "utils/prop-types";

const App = (props) => {
  const {placesCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            placesCount={placesCount}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreen
            offer={offers[0]}
            nearOffers={offers}
            reviews={reviews}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: offersPropType.isRequired,
  reviews: reviewsPropType.isRequired,
};

export default App;
