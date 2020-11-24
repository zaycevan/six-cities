import {NameSpace} from "@store/reducers/root-reducer";

export const TestMockData = {
  offer: {
    "city": `Cologne`,
    "cityLocation": [50.938361, 6.959974],
    "previewPhotos": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    "photos": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`
    ],
    "title": `The house among olive `,
    "isFavorite": true,
    "isPremium": false,
    "rating": 3.8,
    "type": `house`,
    "bedroomsCount": 3,
    "maxGuestsCount": 4,
    "price": 493,
    "amenities": [
      `Laptop friendly workspace`,
      `Washer`,
      `Towels`
    ],
    "hostInformation": {
      "id": 25,
      "name": `Angelina`,
      "super": true,
      "avatar": `img/avatar-angelina.jpg`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "coordinates": [50.957361, 6.9509739999999995],
    "id": 1
  },
  offers: [
    {
      "id": 1,
      "city": `Cologne`,
      "cityLocation": [50.938361, 6.959974],
      "previewPhotos": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      "photos": [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`
      ],
      "title": `The house among olive `,
      "isFavorite": true,
      "isPremium": false,
      "rating": 3.8,
      "type": `house`,
      "bedroomsCount": 3,
      "maxGuestsCount": 4,
      "price": 493,
      "amenities": [
        `Laptop friendly workspace`,
        `Washer`,
        `Towels`
      ],
      "hostInformation": {
        "id": 25,
        "name": `Angelina`,
        "super": true,
        "avatar": `img/avatar-angelina.jpg`
      },
      "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      "coordinates": [50.957361, 6.9509739999999995]
    }
  ],
  offersFromServer: [
    {
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 50.938361,
          "longitude": 6.959974,
          "zoom": 10
        },
        "name": `Cologne`
      },
      "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      "goods": [`Laptop friendly workspace`, `Washer`, `Towels`],
      "host": {
        "avatar_url": `img/avatar-angelina.jpg`,
        "id": 25,
        "is_pro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`],
      "is_favorite": true,
      "is_premium": false,
      "location": {
        "latitude": 50.957361,
        "longitude": 6.9509739999999995,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      "price": 493,
      "rating": 3.8,
      "title": `The house among olive `,
      "type": `house`
    },
  ],
  offerFromServer: {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 10
      },
      "name": `Cologne`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "goods": [`Laptop friendly workspace`, `Washer`, `Towels`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 25,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 50.957361,
      "longitude": 6.9509739999999995,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    "price": 493,
    "rating": 3.8,
    "title": `The house among olive `,
    "type": `house`
  },
  review: {
    "id": 1,
    "name": `Corey`,
    "avatar": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
    "authorId": 1,
    "authorSuper": true,
    "rating": 5,
    "text": `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    "date": new Date(`2020-11-01T13:38:44.752Z`)
  },
  reviews: [
    {
      "id": 1,
      "name": `Corey`,
      "avatar": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
      "authorId": 1,
      "authorSuper": true,
      "rating": 5,
      "text": `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
      "date": new Date(`2020-11-01T13:38:44.752Z`)
    }
  ],
  reviewsFromServer: [
    {
      "comment": `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
      "date": `2020-11-01T13:38:44.752Z`,
      "id": 1,
      "rating": 5,
      "user": {
        "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
        "id": 1,
        "is_pro": true,
        "name": `Corey`
      }
    }
  ],
  user: {
    "email": `Oliver.conner@gmail.com`,
    "password": `12345678`
  },
  appStatus: `APP_READY`,
  currentCity: `Paris`,
  cities: [`Paris`, `Cologne`, `Brussels`],
  type: `Main`,
  currentSort: `POPULAR`
};

export const TestMockStore = {
  [NameSpace.CITIES]: {
    cities: TestMockData.cities,
    currentCity: TestMockData.currentCity,
  },
  [NameSpace.OFFERS]: {
    offers: TestMockData.offers,
    nearOffers: TestMockData.offers,
    favoriteOffers: TestMockData.offers,
    favoriteOfferStatus: `BEFORE_SENT`,
    favoriteOfferId: 1
  },
  [NameSpace.REVIEWS]: {
    reviews: TestMockData.reviews,
    reviewStatus: `BEFORE_SENT`
  },
  [NameSpace.SORT]: {
    currentSort: `POPULAR`,
  },
  [NameSpace.USER]: {
    user: TestMockData.user.email,
    authorizationStatus: `NO_AUTH`,
  },
  [NameSpace.APP]: {
    appStatus: `NOT_READY`,
  }
};
