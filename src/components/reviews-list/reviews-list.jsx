import {reviewsPropType} from "@utils/prop-types";
import Review from "@components/review/review";

const ReviewsList = (props) => {
  const {offerReviews} = props;

  return (
    <ul className="reviews__list">
      {offerReviews.map((offerReview) => (
        <Review
          key={offerReview.id}
          offerReview={offerReview}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  offerReviews: reviewsPropType.isRequired,
};

export default ReviewsList;
