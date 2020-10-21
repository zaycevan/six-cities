import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";
import {offersPropType, reviewsPropType} from "../../utils/prop-types";

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
