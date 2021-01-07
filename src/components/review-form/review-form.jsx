import {ratingValue, ratingTitle} from "@src/const";
import ReviewStar from "@components/review-star/review-star";
import {PostStatus, CommentLength} from "@src/const";

const ReviewFrom = (props) => {
  const {
    reviewStatus,
    offerId,
    onSubmit,
    onRatingChange,
    onCommentChange,
    comment,
    rating
  } = props;

  const isButtonDisabled = () => {
    return !(rating && comment.length <= CommentLength.MAX && comment.length >= CommentLength.MIN && !isFormDisabled());
  };

  const isFormDisabled = () => {
    return reviewStatus === PostStatus.PENDING;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(offerId, {comment, rating});
  };

  return (
    <form className={`reviews__form form
    ${reviewStatus === PostStatus.FAILURE ? `shake` : ``}`} action="#" method="post"
    onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValue.map((item, i) => (
          <ReviewStar
            key={item}
            id={item}
            title={ratingTitle[i]}
            onChange={onRatingChange}
            disabled={isFormDisabled()}
            rating={rating}
          />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={300} minLength={50}
        onChange={onCommentChange}
        value={comment}
        disabled={isFormDisabled()}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled()}>Submit</button>
      </div>
    </form>
  );
};

ReviewFrom.propTypes = {
  reviewStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export {ReviewFrom};
