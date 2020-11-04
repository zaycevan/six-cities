import {connect} from "react-redux";
import Header from "@components/header/header";
import ReviewsList from "@components/reviews-list/reviews-list";
import ReviewFrom from "@components/review-form/review-form";
import Map from "@components/map/map";
import PlacesList from "@components/places-list/places-list";
import {getPluralWord} from "@utils/common";
import {offersPropType, reviewsPropType} from "@utils/prop-types";
import {PageType, SortType} from "@src/const";
import {filteredOfferReviews} from "@store/selectors";
import {mapStateToProps} from "./room-screen-connect";

const RoomScreen = (props) => {
  const {
    nearOffers,
    reviews,
    activeCardId,
    onActiveCard,
    outActiveCard
  } = props;

  const {
    id,
    photos,
    title,
    description,
    isPremium,
    type,
    rating,
    bedroomsCount,
    maxGuestsCount,
    price,
    amenities,
    hostInformation,
    reviewsId
  } = nearOffers[0];

  const offerReviews = filteredOfferReviews(reviews, reviewsId);
  const PHOTO_COUNTS = 6;

  return (
    <div className="page">
      <Header
        type={PageType.NEAR}
      />

      <main className="page__main page__main--property">
        <section className="property" id={id}>
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.slice(0, PHOTO_COUNTS).map((photo, i) => (
                <div key={`${i}-${photo}`} className="property__image-wrapper">
                  <img className="property__image" src={photo} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${100 * rating / 5}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsCount} {getPluralWord(bedroomsCount, `Bedroom`, `Bedrooms`)}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxGuestsCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {amenities.map((amenity, i) => (
                    <li key={`${i}-${amenity}`} className="property__inside-item">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={hostInformation.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {hostInformation.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
                <ReviewsList
                  offerReviews={offerReviews}
                />
                <ReviewFrom />
              </section>
            </div>
          </div>
          <Map
            offersForCity={nearOffers}
            activeCardId={activeCardId}
            mapClassName="property__map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              placesListClassName="near-places__list places__list"
              offersForCity={nearOffers}
              type={PageType.NEAR}
              currentSort={SortType.POPULAR}
              onActiveCard={onActiveCard}
              outActiveCard={outActiveCard}
            />
          </section>
        </div>
      </main>
    </div>
  );

};

RoomScreen.propTypes = {
  nearOffers: offersPropType.isRequired,
  reviews: reviewsPropType.isRequired,
  activeCardId: PropTypes.number,
  onActiveCard: PropTypes.func.isRequired,
  outActiveCard: PropTypes.func.isRequired,
};

export {RoomScreen};
export default connect(mapStateToProps)(RoomScreen);
