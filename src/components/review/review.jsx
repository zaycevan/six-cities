import {formatReviewDate} from "@utils/common";
import {reviewPropType} from "@utils/prop-types";

const Review = (props) => {
  const {offerReview} = props;
  const {id, avatar, name, rating, date, text} = offerReview;

  return (
    <li className="reviews__item" id={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${100 * rating / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>{formatReviewDate(date)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  offerReview: reviewPropType.isRequired,
};

export default Review;
