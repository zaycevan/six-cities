import {connect} from "react-redux";
import {postReview} from "@store/api-actions";
import {ReviewFrom} from "./review-form";
import {getReviewStatus} from "@store/selectors";

const mapStateToProps = (state) => ({
  reviewStatus: getReviewStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(offerId, reviewData) {
    dispatch(postReview(offerId, reviewData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFrom);
