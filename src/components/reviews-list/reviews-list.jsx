import {reviewsPropType} from "@utils/prop-types";
import Review from "@components/review/review";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsPropType.isRequired,
};

export default ReviewsList;
