import {connect} from "react-redux";
import {postReview} from "@store/api-actions";
import {getReviewStatus} from "@store/selectors";
import {CommentLength} from "@src/const";
import {PostStatus} from "@src/const";

const withReviewFrom = (Component) => {
  class WithReviewFrom extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``,
      };

      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _resetForm() {
      this.setState({
        comment: ``,
        rating: ``,
      });
    }

    _isButtonDesabled() {
      const {comment, rating} = this.state;

      if (rating && comment.length <= CommentLength.MAX && comment.length >= CommentLength.MIN && !this._isFormDesabled()) {
        return false;
      }

      return true;
    }

    _isFormDesabled() {
      const {reviewStatus} = this.props;

      if (reviewStatus === PostStatus.PENDING) {
        return true;
      }

      return false;
    }

    _handleInputChange(evt) {
      evt.preventDefault();
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    _handleSubmit(evt) {
      const {onSubmit, offerId} = this.props;
      const {comment, rating} = this.state;

      evt.preventDefault();
      onSubmit(offerId, {comment, rating});
    }

    componentDidUpdate() {
      const {reviewStatus} = this.props;

      if (reviewStatus === PostStatus.SENT) {
        this._resetForm();
      }
    }

    render() {
      const {comment} = this.state;
      const {reviewStatus} = this.props;

      return (
        <Component
          {...this.props}
          reviewStatus={reviewStatus}
          onSubmit={this._handleSubmit}
          onChange={this._handleInputChange}
          isFormDisabled={this._isFormDesabled()}
          isButtonDesabled={this._isButtonDesabled()}
          comment={comment}
        />
      );
    }
  }

  WithReviewFrom.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    offerId: PropTypes.number.isRequired,
    reviewStatus: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => ({
    reviewStatus: getReviewStatus(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(offerId, reviewData) {
      dispatch(postReview(offerId, reviewData));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewFrom);
};

export default withReviewFrom;
