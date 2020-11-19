import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import ScrollToTop from "@components/scroll-to-top/scroll-to-top";
import MainScreen from "@components/main-screen/main-screen-connect";
import SignInScreen from "@components/sign-in-screen/sign-in-screen-connect";
import FavoritesScreen from "@components/favorites-screen/favorites-screen-connect";
import RoomScreen from "@components/room-screen/room-screen-connect";
import withActiveCard from "@hocs/with-active-card/with-active-card";
import PrivateRoute from "@components/private-route/private-route-connect";
import browserHistory from "@src/browser-history";
import {AppRoute} from "@src/const";
import {offersPropType} from "@utils/prop-types";

const RoomScreenWrapped = withActiveCard(RoomScreen);

class App extends React.PureComponent {
  componentDidMount() {
    const {initApp} = this.props;

    initApp();
  }

  render() {
    const {isAppReady, offers} = this.props;

    if (!isAppReady) {
      return <div className="cities__status">...Loading</div>;
    }

    return (
      <BrowserRouter history={browserHistory}>
        <ScrollToTop />
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
          <Route exact path={AppRoute.OFFER + `:id`}
            render={({match}) => {
              const offer = offers.find((item) => +item.id === +match.params.id);
              return <RoomScreenWrapped
                offer={offer}
                key={offer.id}
              />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  initApp: PropTypes.func.isRequired,
  isAppReady: PropTypes.bool.isRequired,
  offers: offersPropType.isRequired,
};

export {App};
