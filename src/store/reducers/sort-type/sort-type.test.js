import {sortType} from "./sort-type";
import {ActionType} from "@store/action";

it(`Reducer sortType without additional parameters should return initial state`, () => {
  expect(sortType(void 0, {})).toEqual({
    currentSort: `Popular`,
  });
});

it(`Reducer sortType should update status`, () => {
  expect(sortType({
    currentSort: `Popular`
  }, {
    type: ActionType.CHANGE_SORT,
    payload: `Price: low to high`
  })).toEqual({
    currentSort: `Price: low to high`,
  });
});

it(`Reducer sortType should reset status`, () => {
  expect(sortType({
    currentSort: `Price: low to high`
  }, {
    type: ActionType.RESET_SORT,
  })).toEqual({
    currentSort: `Popular`,
  });
});
