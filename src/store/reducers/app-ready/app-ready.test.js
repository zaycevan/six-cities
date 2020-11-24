import {appReady} from "./app-ready";
import {ActionType} from "@store/action";

it(`Reducer appReady without additional parameters should return initial state`, () => {
  expect(appReady(void 0, {})).toEqual({
    appStatus: `NOT_READY`,
  });
});

it(`Reducer appReady should update status`, () => {
  expect(appReady({
    appStatus: `NOT_READY`
  }, {
    type: ActionType.GET_READY_APP,
    payload: `APP_READY`
  })).toEqual({
    appStatus: `APP_READY`,
  });
});
