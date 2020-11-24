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
    }

    componentDidUpdate() {
      const {reviewStatus} = this.props;

      if (reviewStatus === PostStatus.SENT) {
        this._resetForm();
      }
    }

    _resetForm() {
      this.setState({
        comment: ``,
        rating: ``,
      });
    }

    _handleInputChange(evt) {
      evt.preventDefault();
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {comment, rating} = this.state;

      return (
        <Component
          {...this.props}
          onChange={this._handleInputChange}
          comment={comment}
          rating={rating}
        />
      );
    }
  }

  WithReviewFrom.propTypes = {
    offerId: PropTypes.number.isRequired,
    reviewStatus: PropTypes.string.isRequired,
  };

  return WithReviewFrom;
};

export default withReviewFrom;
