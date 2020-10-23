import {getRandomInteger} from "@utils/common";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const generateRating = () => {
  const rating = (Math.floor((Math.random() * 5) * 10) / 10);
  return rating;
};

const generateReviewDate = () => {
  const currentDate = new Date();
  currentDate.setFullYear(2019, getRandomInteger(0, 11), getRandomInteger(1, 30));
  return new Date(currentDate);
};

export default [
  {
    id: 11,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Kevin`,
    rating: generateRating(),
    date: generateReviewDate(),
    text: `Cool flat ideal for 4 persons, with a perfect location !! And the owner is also very nice. The only thing is the two stairs because they are a little bit hard but for us it was ok.`
  },
  {
    id: 12,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Maeva`,
    rating: generateRating(),
    date: generateReviewDate(),
    text: `First of all, the stairs are not good for old people to use. You have to use those stairs carefully. May be, unsure, it's overall in Amsterdam. Please see the picture.`
  },
  {
    id: 13,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Nataly`,
    rating: generateRating(),
    date: generateReviewDate(),
    text: `Really nice place to stay, reasonably priced, tram is two minutes away with good connection to the city center. Clean rooms and nice staff. Recommended.`
  },
  {
    id: 14,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Malvika`,
    rating: generateRating(),
    date: generateReviewDate(),
    text: `Really clean and lovely hotel. Had a great time staying here as a group of 6. However the hotel is a bit far from the centre - 45-60 mins via public transport and the taxis in Amsterdam are quite expensive so it ended up costing us a lot as we spent a lot of time in the city.`
  },
  {
    id: 15,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Hamudi`,
    rating: generateRating(),
    date: generateReviewDate(),
    text: `Great place in a perfect neighborhood. It’s not in the middle of downtown (and doesn’t claim to be) which is the perfect mix of convenient but still quiet.`
  },
  {
    id: 16,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Dominic`,
    rating: generateRating(),
    date: generateReviewDate(),
    text: `Location and place were fine with exceptions to silk and shower drainage. Check-in was totally irritating and unnecessary to meet with their 3rd party vendor when there was a lock box next to the door. `
  },
];
