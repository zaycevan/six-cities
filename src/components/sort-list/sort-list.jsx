import {connect} from "react-redux";
import {ActionCreator} from "@store/action";
import {SortType} from "@src/const";

const SortList = (props) => {
  const {currentSort, onSort, sortOpen} = props;
  const sortTypes = Object.values(SortType);

  return (
    <ul className={`places__options places__options--custom ${sortOpen ? `places__options--opened` : ``}`}>
      {sortTypes.map((sortType, i) => (
        <li
          key={`${sortType}-${i}`}
          className={`places__option ${currentSort === sortType ? `places__option--active` : ``}`}
          tabIndex="0"
          onClick={(evt) => {
            evt.preventDefault();
            onSort(sortType);
          }}>{sortType}</li>
      ))}
    </ul>
  );
};

SortList.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  sortOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
  sortOpen: state.sortOpen,
});

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.changeSort(sortType));
  }
});

export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
