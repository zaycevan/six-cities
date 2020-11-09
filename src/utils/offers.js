import {SortType} from "@src/const";

const compareTitles = (titleA, titleB) => {
  if (titleA > titleB) {
    return 1;
  } else if (titleA < titleB) {
    return -1;
  }
  return 0;
};

export const sortOfferPriceUp = (offerA, offerB) => {
  let priceDiff = offerA.price - offerB.price;

  if (priceDiff === 0) {
    priceDiff = compareTitles(offerA.title, offerB.title);
  }

  return priceDiff;
};

export const sortOfferPriceDowm = (offerA, offerB) => {
  let priceDiff = offerB.price - offerA.price;

  if (priceDiff === 0) {
    priceDiff = compareTitles(offerA.title, offerB.title);
  }

  return priceDiff;
};

export const sortOfferRating = (offerA, offerB) => {
  let ratingDiff = offerB.rating - offerA.rating;

  if (ratingDiff === 0) {
    ratingDiff = compareTitles(offerA.title, offerB.title);
  }

  return ratingDiff;
};

export const getSortedOffers = (currentSort, offers) => {
  switch (currentSort) {
    case SortType.PRICE_UP:
      return offers.slice().sort(sortOfferPriceUp);
    case SortType.PRICE_DOWN:
      return offers.slice().sort(sortOfferPriceDowm);
    case SortType.TOP_RATED:
      return offers.slice().sort(sortOfferRating);
  }
  return offers;
};

export const adaptOfferToClient = (offer) => {
  return {
    id: offer.id,
    city: offer.city.name,
    cityLocation: [offer.city.location.latitude, offer.city.location.longitude],
    previewPhotos: offer.preview_image,
    photos: offer.images,
    title: offer.title,
    description: offer.description,
    isPremium: offer.is_premium,
    type: offer.type,
    rating: offer.rating,
    bedroomsCount: offer.bedrooms,
    maxGuestsCount: offer.max_adults,
    price: offer.price,
    amenities: offer.goods,
    coordinates: [offer.location.latitude, offer.location.longitude],
    hostInformation: {
      id: offer.host.id,
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      super: offer.host.is_pro
    },
    isFavorite: offer.is_favorite,
  };
};
