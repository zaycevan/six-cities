import {connect} from "react-redux";
import SortList from "@components/sort-list/sort-list";
import {mapStateToProps} from "./sort-form-connect";

const SortForm = (props) => {
  const {
    sortOpen,
    onOpenSort,
    currentSort,
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={onOpenSort}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        sortOpen={sortOpen}
      />
    </form>
  );
};

SortForm.propTypes = {
  sortOpen: PropTypes.bool.isRequired,
  onOpenSort: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
};

export {SortForm};
export default connect(mapStateToProps)(SortForm);
