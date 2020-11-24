const ReviewStar = (props) => {
  const {
    onChange,
    id,
    title,
    disabled,
    rating
  } = props;

  const isChecked = () => {
    return +id === +rating;
  };

  return (
    <>
      <input onChange={onChange} className={`form__rating-input visually-hidden ${isChecked() ? `form__rating-input__checked` : ``}`} name="rating" value={id} id={`${id}-stars`} type="radio" disabled={disabled}/>
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

ReviewStar.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  rating: PropTypes.string.isRequired,
};

export default ReviewStar;
