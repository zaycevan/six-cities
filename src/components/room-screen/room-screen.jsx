import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import NearPlaceCard from "../near-place-card/near-place-card";
import ReviewFrom from "../review-form/review-form";
import {getPluralWord, formatReviewDate} from "../../utils/common";
import {offerPropType, offersPropType, reviewsPropType} from "../../utils/prop-types";

class RoomScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  render() {
    const {offer, nearOffers, reviews} = this.props;
    const {id, photos, title, description, premium, type, rating, bedroomsCount, maxGuestsCount, price, amenities, hostInformation, reviewsId} = offer;
    const offerReviews = reviews.filter((review) => reviewsId.includes(review.id));

    if (photos.length > 6) {
      photos.length = 6;
    }

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={`/`} className="header__logo-link">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={`/login`} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property" id={id}>
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {photos.map((photo, i) => (
                  <div key={`${i}-${photo}`} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{premium}</span>
                </div>
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
                  <ul className="reviews__list">
                    {offerReviews.map((offerReview) => (
                      <li key={offerReview.id} className="reviews__item">
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={offerReview.avatar} width="54" height="54" alt="Reviews avatar"/>
                          </div>
                          <span className="reviews__user-name">
                            {offerReview.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `${100 * offerReview.rating / 5}%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {offerReview.text}
                          </p>
                          <time className="reviews__time" dateTime={offerReview.date}>{formatReviewDate(offerReview.date)}</time>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ReviewFrom />
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearOffers.map((nearOffer) => (
                  <NearPlaceCard
                    key={nearOffer.id}
                    offer={nearOffer}
                    onCard={() => {
                      this.setState({activeCard: nearOffer});
                    }}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

RoomScreen.propTypes = {
  offer: offerPropType.isRequired,
  nearOffers: offersPropType.isRequired,
  reviews: reviewsPropType.isRequired,
};

export default RoomScreen;
