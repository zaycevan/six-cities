export const HousingType = {
  APARTMENT: `Apartment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const PageType = {
  MAIN: `Main`,
  FAVORITE: `Favorite`,
  NEAR: `Near`,
  LOGIN: `Login`,
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_UP: `Price: low to high`,
  PRICE_DOWN: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const CITIES_COORDINATES = {
  Paris: [48.85661, 2.351499],
  Cologne: [50.938361, 6.959974],
  Brussels: [50.846557, 4.351697],
  Amsterdam: [52.37454, 4.897976],
  Hamburg: [53.550341, 10.000654],
  Dusseldorf: [51.225402, 6.776314]
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOT: `/`,
  OFFER: `/offer/`,
};

export const APIRoute = {
  HOTELS: `/hotels`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
};

export const CommentLength = {
  MAX: 300,
  MIN: 50,
};

export const ratingValue = [5, 4, 3, 2, 1];

export const ratingTitle = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

export const PostStatus = {
  BEFORE_SENT: `BEFORE_SENT`,
  PENDING: `PENDING`,
  SENT: `SENT`,
  FAILURE: `FAILURE`,
};
