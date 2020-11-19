import {ratingValue, ratingTitle} from "@src/const";
import ReviewStar from "./review-star";
import {ReviewStatus} from "@src/const";

const ReviewFrom = (props) => {
  const {
    reviewStatus,
    onSubmit,
    onChange,
    isFormDisabled,
    isButtonDesabled,
    comment
  } = props;

  return (
    <form className={`reviews__form form
    ${reviewStatus === ReviewStatus.FAILURE ? `shake` : ``}`} action="#" method="post"
    onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValue.map((item, i) => (
          <ReviewStar
            key={item}
            id={item}
            title={ratingTitle[i]}
            onChange={onChange}
            disabled={isFormDisabled}
          />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={300} minLength={50}
        onChange={onChange}
        value={comment}
        disabled={isFormDisabled}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDesabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewFrom.propTypes = {
  reviewStatus: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  isButtonDesabled: PropTypes.bool.isRequired,
  comment: PropTypes.string.isRequired,
};

export default ReviewFrom;
