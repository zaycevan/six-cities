import {Link} from "react-router-dom";
import {offerPropType} from "@utils/prop-types";

const PlaceCard = (props) => {
  const {offer, onActiveCard, outActiveCard, placeCardClassName, imageWrapperClassName, infoClassName, imageWidth, imageHeight, showPremium} = props;
  const {id, isPremium, photos, price, rating, title, type} = offer;
  const isOnCard = () => {
    if (onActiveCard) {
      return onActiveCard(id);
    }
    return null;
  };
  const isOutCard = () => {
    if (onActiveCard) {
      return outActiveCard();
    }
    return null;
  };

  return (
    <article className={`${placeCardClassName} place-card`}
      id={id}
      onMouseOver = {(evt) => {
        evt.preventDefault();
        isOnCard();
      }}
      onMouseOut = {(evt) => {
        evt.preventDefault();
        isOutCard();
      }}>
      {showPremium &&
        <div>{isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        </div>
      }
      <div className={`${imageWrapperClassName} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={photos[0]} width={`${imageWidth}`} height={`${imageHeight}`} alt="Place image"/>
        </Link>
      </div>
      <div className={`${infoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${100 * rating / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: offerPropType.isRequired,
  onActiveCard: PropTypes.func,
  outActiveCard: PropTypes.func,
  placeCardClassName: PropTypes.string.isRequired,
  imageWrapperClassName: PropTypes.string.isRequired,
  infoClassName: PropTypes.string.isRequired,
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  showPremium: PropTypes.bool.isRequired,
};

export default PlaceCard;
