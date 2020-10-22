import moment from "moment";

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
