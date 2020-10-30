export const ActionType = {
  CHANGE_CITY: `CITY_CHANGE`,
  GETTING_OFFERS: `GETTING_OFFERS`,
  OPEN_SORT: `OPEN_SORT`,
  CHANGE_SORT: `CHANGE_SORT`,
  GET_ACTIVE_CARD: `GET_ACTIVE_CARD`,
  LEAVE_ACTIVE_CARD: `LEAVE_ACTIVE_CARD`
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
  openSort: () => ({
    type: ActionType.OPEN_SORT,
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType,
  }),
  getActiveCard: (activeCardId) => ({
    type: ActionType.GET_ACTIVE_CARD,
    payload: activeCardId,
  }),
  leaveActiveCard: () => ({
    type: ActionType.LEAVE_ACTIVE_CARD,
  }),
};
