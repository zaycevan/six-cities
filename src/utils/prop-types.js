import {HousingType} from "../const";

export const offerPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([HousingType.APARTMENT, HousingType.ROOM, HousingType.HOUSE, HousingType.HOTEL]).isRequired,
  rating: PropTypes.number.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxGuestsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  hostInformation: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  reviewsId: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
});

export const offersPropType = PropTypes.arrayOf(
    offerPropType.isRequired
);

export const reviewPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string.isRequired,
});

export const reviewsPropType = PropTypes.arrayOf(
    reviewPropType.isRequired
);
