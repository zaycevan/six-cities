import {extend} from "@utils/common";
import {ActionType} from "@store/action";
import {PostStatus} from "@src/const";

const initialState = {
  offers: [],
  nearOffers: [],
  favoriteOffers: [],
  favoriteOfferStatus: PostStatus.BEFORE_SENT,
  favoriteOfferId: null
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
      });
    case ActionType.POST_FAVORITE_OFFER:
      return extend(state, {
        favoriteOfferStatus: action.payload,
      });
    case ActionType.ADD_FAVORITE_OFFER_ID:
      return extend(state, {
        favoriteOfferId: action.payload,
      });
  }

  return state;
};

export {offersData};
