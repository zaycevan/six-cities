import {Fragment} from "react";

const ReviewStar = (props) => {
  const {
    onChange,
    id,
    title,
    disabled
  } = props;

  return (
    <Fragment>
      <input onChange={onChange} className="form__rating-input visually-hidden" name="rating" value={id} id={`${id}-stars`} type="radio" disabled={disabled}/>
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

ReviewStar.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ReviewStar;
