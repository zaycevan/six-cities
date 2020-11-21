import {connect} from "react-redux";
import {postReview} from "@store/api-actions";
import {ReviewFrom} from "./review-form";

const mapDispatchToProps = (dispatch) => ({
  onSubmit(offerId, reviewData) {
    dispatch(postReview(offerId, reviewData));
  }
});

export default connect(null, mapDispatchToProps)(ReviewFrom);
