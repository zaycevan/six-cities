export const ActionType = {
  CHANGE_CITY: `CITY_CHANGE`,
  GETTING_OFFERS: `GETTING_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  gettingOffers: (city) => ({
    type: ActionType.GETTING_OFFERS,
    payload: city,
  }),
};
