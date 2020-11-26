import moment from "moment";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
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

const compareTitles = (titleA, titleB) => {
  if (titleA > titleB) {
    return 1;
  } else if (titleA < titleB) {
    return -1;
  }
  return 0;
};

export const sortReviewsByDate = (reviewA, reviewB) => {
  let dateA = new Date(reviewA.date).getTime();
  let dateB = new Date(reviewB.date).getTime();
  let dataDiff = dateB - dateA;

  if (dataDiff === 0) {
    dataDiff = compareTitles(reviewA.text, reviewB.text);
  }

  return dataDiff;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const isValidEmail = (email) => {
  const EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2})$/;

  return EMAIL_REGEXP.test(email);
};

export const showError = (err) => {
  return (<p>{err}</p>);
};

export const getOffersForCity = (city, offers) => {
  return offers.filter((offer) => offer.city === city);
};
