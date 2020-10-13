import PropTypes from "prop-types";
import moment from "moment";
import {housingType} from "../const";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getPluralWord = (value, one, two) => {
  let number = Math.abs(value);

  number %= 10;
  if (number === 1) {
    return one;
  }
  return two;
};

export const formatReviewDate = (date) => {
  if (!(date instanceof Date)) {
    return ``;
  }
  return moment(date).format(`MMMM YYYY`);
};

export const offerPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  premium: PropTypes.string.isRequired,
  type: PropTypes.oneOf([housingType.APARTMENT, housingType.ROOM, housingType.HOUSE, housingType.HOTEL]).isRequired,
  rating: PropTypes.number.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxGuestsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  hostInformation: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired,
  }).isRequired,
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
