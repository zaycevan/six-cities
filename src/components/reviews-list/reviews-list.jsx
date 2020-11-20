import {reviewsPropType} from "@utils/prop-types";
import {sortReviewsByDate} from "@utils/common";
import Review from "@components/review/review";

const ReviewsList = (props) => {
  const REVIEWS_COUNT = 10;
  const {reviews} = props;
  const sortedReviews = reviews.slice().sort(sortReviewsByDate).slice(0, REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => (
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
