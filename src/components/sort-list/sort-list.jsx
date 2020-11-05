import {connect} from "react-redux";
import {SortType} from "@src/const";
import {mapStateToProps, mapDispatchToProps} from "./sort-list-connect";

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

export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
