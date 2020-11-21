import browserHistory from "@src/browser-history";
import Header from "@components/header/header-connect";
import ReviewsList from "@components/reviews-list/reviews-list";
import withReviewFrom from "@hocs/with-review-form/with-review-form";
import ReviewFrom from "@components/review-form/review-form-connect";
import Map from "@components/map/map";
import PlacesList from "@components/places-list/places-list";
import {getPluralWord} from "@utils/common";
import {offerPropType, offersPropType, reviewsPropType} from "@utils/prop-types";
import {PageType, SortType, AuthorizationStatus, AppRoute, PostStatus, AppStatus} from "@src/const";

const ReviewFromWrapped = withReviewFrom(ReviewFrom);

class RoomScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleFavoriteButtonClick = this._handleFavoriteButtonClick.bind(this);
  }

  componentDidMount() {
    const {offer, loadData} = this.props;

    loadData(offer.id);
  }

  _handleFavoriteButtonClick(evt) {
    const {authorizationStatus, offer, onFavoriteButtonClick} = this.props;
    const status = !offer.isFavorite ? 1 : 0;

    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(AppRoute.LOGIN);
    }
    onFavoriteButtonClick(offer.id, status);
  }

  _isButtonDisabled() {
    const {favoriteOfferStatus} = this.props;

    return favoriteOfferStatus === PostStatus.PENDING;
  }

  render() {
    const {
      appStatus,
      offer,
      reviews,
      reviewStatus,
      authorizationStatus,
      favoriteOfferStatus,
      nearOffers,
      activeCardId,
      onActiveCard,
      outActiveCard
    } = this.props;

    const {
      id,
      city,
      photos,
      title,
      description,
      isPremium,
      isFavorite,
      type,
      rating,
      bedroomsCount,
      maxGuestsCount,
      price,
      amenities,
      hostInformation,
    } = offer;

    const PHOTO_COUNTS = 6;

    if (appStatus !== AppStatus.PAGE_READY) {
      return <div className="cities__status">...Loading</div>;
    }

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
                  <button
                    className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}
                    ${favoriteOfferStatus === PostStatus.FAILURE ? `shake` : ``}`}
                    type="button"
                    onClick={this._handleFavoriteButtonClick}
                    disabled={this._isButtonDisabled()}>
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList
                    reviews={reviews}
                  />
                  {authorizationStatus === AuthorizationStatus.AUTH ?
                    <ReviewFromWrapped
                      offerId={id}
                      reviewStatus={reviewStatus}/> :
                    ``
                  }
                </section>
              </div>
            </div>
            <Map
              currentCity={city}
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
  }
}

RoomScreen.propTypes = {
  loadData: PropTypes.func.isRequired,
  offer: offerPropType.isRequired,
  reviews: reviewsPropType.isRequired,
  reviewStatus: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  favoriteOfferStatus: PropTypes.string.isRequired,
  nearOffers: offersPropType.isRequired,
  activeCardId: PropTypes.number,
  onActiveCard: PropTypes.func.isRequired,
  outActiveCard: PropTypes.func.isRequired,
  appStatus: PropTypes.string.isRequired,
};

export {RoomScreen};
