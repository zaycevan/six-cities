import {PostStatus} from "@src/const";

const withReviewFrom = (Component) => {
  const WithReviewFrom = (props) => {
    const [rating, setRating] = React.useState(``);
    const [comment, setComment] = React.useState(``);

    React.useEffect(() => {
      const {reviewStatus} = props;
      if (reviewStatus === PostStatus.SENT) {
        resetForm();
      }
    });

    const resetForm = () => {
      setRating(``);
      setComment(``);
    };

    const handleRatingChange = (evt) => {
      evt.preventDefault();
      const {value} = evt.target;
      setRating(value);
    };

    const handleCommentChange = (evt) => {
      evt.preventDefault();
      const {value} = evt.target;
      setComment(value);
    };

    return (
      <Component
        {...props}
        onRatingChange={handleRatingChange}
        onCommentChange={handleCommentChange}
        comment={comment}
        rating={rating}
      />
    );
  };

  WithReviewFrom.propTypes = {
    offerId: PropTypes.number.isRequired,
    reviewStatus: PropTypes.string.isRequired,
  };

  return WithReviewFrom;
};

export default withReviewFrom;
