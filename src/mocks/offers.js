import {HousingType} from "../const";
import {getRandomInteger} from "../utils/common";

const generateReviewsId = () => {
  const randomReviewsId = new Set();
  for (let i = 0; i < getRandomInteger(1, 6); i++) {
    randomReviewsId.add(getRandomInteger(11, 16));
  }

  return Array.from(randomReviewsId);
};

const generateRating = () => {
  const rating = (Math.floor((Math.random() * 5) * 10) / 10);
  return rating;
};

export default [
  {
    id: 1,
    photos: [`https://roomester.ru/wp-content/uploads/2018/08/skandinavskij-stil-v-interere-gostinoj-69.jpg`, `https://roomester.ru/wp-content/uploads/2019/03/gostinaya-spalnya-4-2.jpg`, `https://roomester.ru/wp-content/uploads/2019/02/gostinaya-v-stile-provans.jpg`, `https://roomester.ru/wp-content/uploads/2018/11/gostinaya-v-stile-loft.jpg`],
    title: `Lovely Guesthouse in the suburbs`,
    description: `Quiet and cosy tiny house in the suburbs of Amsterdam, just 10 minutes by metro from the city center of Amsterdam and 5 minutes away from Amsterdam Ajax Arena. The house is just 20 square meters, but it has everything you might need. It is located in a residential neighborhood, 2 minutes away from the metro station in a lovely green area. It is the ideal place for a couple.`,
    isPremium: Boolean(getRandomInteger(0, 1)),
    type: HousingType.APARTMENT,
    rating: generateRating(),
    bedroomsCount: getRandomInteger(1, 4),
    maxGuestsCount: getRandomInteger(2, 6),
    price: getRandomInteger(70, 300),
    amenities: [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`, `Baby seat`],
    coordinates: [52.3909553943508, 4.85309666406198],
    hostInformation: {
      avatar: `https://a0.muscache.com/im/pictures/user/9705ae17-cd68-4a1b-8668-46611c1811e7.jpg?im_w=240`,
      name: `Philip`,
      super: true
    },
    reviewsId: generateReviewsId()
  },
  {
    id: 2,
    photos: [`https://a0.muscache.com/im/pictures/fd1fa9b7-3459-4b4b-91ca-4d62772da7b3.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/af653a13-7892-4899-ae64-0481c5407cd5.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/6b95dbde-95a2-404a-814f-ac00845e2c7b.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/e01fd769-1fb4-41b1-8af7-0a435a4069b4.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/a0c674a1-0154-473d-abcc-bf2b432a392a.jpg?im_w=720`],
    title: `Central location private room all facillities`,
    description: `West town center. Private bright room 4x4 m, central heating, fully equipped kitchen, private shower+toilet. Third floor, stairs. WiFi, tv set, DVD, hairdryer. Towels, bed linen provided. Lively lovely neighborhood, quiet and safe at night. Street with characteristic Amsterdam houses and big trees.
    Museums, park, marke`,
    isPremium: Boolean(getRandomInteger(0, 1)),
    type: HousingType.ROOM,
    rating: generateRating(),
    bedroomsCount: getRandomInteger(1, 4),
    maxGuestsCount: getRandomInteger(2, 6),
    price: getRandomInteger(70, 300),
    amenities: [`wifi`, `dishwasher`, `Iron`, `TV`, `Washer`],
    coordinates: [52.369553943508, 4.85309666406198],
    hostInformation: {
      avatar: `https://a0.muscache.com/im/users/1232843/profile_pic/1317483378/original.jpg?im_w=720`,
      name: `Harm`,
      super: false
    },
    reviewsId: generateReviewsId()
  },
  {
    id: 3,
    photos: [`https://a0.muscache.com/im/pictures/3278447/0cec7b0a_original.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/3278451/c5c62f2c_original.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/3278456/130c852a_original.jpg?im_w=720`],
    title: `Private room in bed and breakfast hosted`,
    description: `Large split level room to acc. 3 people ( possible 4 but then a little crowded but cheaper!!) with fascilities as coffee/tea, radio, fridge, an ajacent bathroom and own toilet (extra toilet owner downstairs) ,microwave, wifi. Typical Amsterdamschool of architecture, good connection ( general transport) with inner city. Nice breakfast and warm hospitality`,
    isPremium: Boolean(getRandomInteger(0, 1)),
    type: HousingType.HOUSE,
    rating: generateRating(),
    bedroomsCount: getRandomInteger(1, 4),
    maxGuestsCount: getRandomInteger(2, 6),
    price: getRandomInteger(70, 300),
    amenities: [`wifi`, `Heating`, `Hair dryer`, `Laptop`],
    coordinates: [52.3909553943508, 4.929309666406198],
    hostInformation: {
      avatar: `https://a0.muscache.com/im/pictures/user/4af95a33-57b7-4f36-bc28-df74de058cc7.jpg?im_w=720`,
      name: `Erwin`,
      super: false
    },
    reviewsId: generateReviewsId()
  },
  {
    id: 4,
    photos: [`https://a0.muscache.com/im/pictures/12edb6ef-7cef-40ae-a01e-d98ec09d405a.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/b621e711-566e-4fd6-b11e-9a896c3b6aa6.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/1fe51232-1688-4cea-b56e-0ec83f26c0cf.jpg?im_w=720`, `https://a0.muscache.com/im/pictures/0623a3a7-3f6a-435e-a900-f5cc2ec750e0.jpg?im_w=720`],
    title: `Felix Super Apartment`,
    description: `Amazing Apartment in the middel of Amsterdam , only five minutes walking from Centraal Station and five minutes walking from Dam Square .`,
    isPremium: Boolean(getRandomInteger(0, 1)),
    type: HousingType.HOTEL,
    rating: generateRating(),
    bedroomsCount: getRandomInteger(1, 4),
    maxGuestsCount: getRandomInteger(2, 6),
    price: getRandomInteger(70, 300),
    amenities: [`wifi`, `Heating`, `TV`],
    coordinates: [52.3809553943508, 4.939309666406198],
    hostInformation: {
      avatar: `https://a0.muscache.com/im/pictures/user/2f3dfed9-fe3f-48d7-86dc-acf077d25711.jpg?im_w=720`,
      name: `Dario`,
      super: true
    },
    reviewsId: generateReviewsId()
  }
];
