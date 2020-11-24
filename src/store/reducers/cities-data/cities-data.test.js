import {citiesData} from "./cities-data";
import {ActionType} from "@store/action";
import {TestMockData} from "@src/mocks/test-mocks";

it(`Reducer citiesData without additional parameters should return initial state`, () => {
  expect(citiesData({
    cities: TestMockData.cities,
    currentCity: TestMockData.currentCity,
  }, {})).toEqual({
    cities: TestMockData.cities,
    currentCity: TestMockData.currentCity,
  });
});

it(`Reducer citiesData should update status`, () => {
  expect(citiesData({
    cities: TestMockData.cities,
    currentCity: TestMockData.currentCity,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Cologne`
  })).toEqual({
    cities: TestMockData.cities,
    currentCity: `Cologne`
  });
});
