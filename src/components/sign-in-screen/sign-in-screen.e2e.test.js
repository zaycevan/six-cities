import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import {SignInScreen} from "./sign-in-screen";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

configure({adapter: new Adapter()});
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);
const mockEvent = {
  preventDefault() {}
};

it(`Should not submit login form without data`, () => {
  const handleSubmitAction = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <Router history={browserHistory}>
          <SignInScreen
            authorizationStatus={`NO_AUTH`}
            currentCity={TestMockData.currentCity}
            onSubmit={handleSubmitAction}
          />
        </Router>
      </Provider>
  );

  wrapper.find(`.login__form`).simulate(`submit`, mockEvent);
  expect(handleSubmitAction).toHaveBeenCalledTimes(0);
});

it(`Should not submit login form without password`, () => {
  const handleSubmitAction = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <Router history={browserHistory}>
          <SignInScreen
            authorizationStatus={`NO_AUTH`}
            currentCity={TestMockData.currentCity}
            onSubmit={handleSubmitAction}
          />
        </Router>
      </Provider>
  );

  wrapper.find(`#email`).instance().value = `zzz@zz.ru`;
  wrapper.find(`#password`).instance().value = ``;

  wrapper.find(`.login__form`).simulate(`submit`, mockEvent);
  expect(handleSubmitAction).toHaveBeenCalledTimes(0);
});

it(`Should submit login form with correct data`, () => {
  const handleSubmitAction = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <Router history={browserHistory}>
          <SignInScreen
            authorizationStatus={`NO_AUTH`}
            currentCity={TestMockData.currentCity}
            onSubmit={handleSubmitAction}
          />
        </Router>
      </Provider>
  );

  wrapper.find(`#email`).instance().value = `zzz@zz.ru`;
  wrapper.find(`#password`).instance().value = `123`;

  wrapper.find(`.login__form`).simulate(`submit`, mockEvent);
  expect(handleSubmitAction).toHaveBeenCalledWith({
    login: `zzz@zz.ru`,
    password: `123`,
  });
  expect(handleSubmitAction).toHaveBeenCalledTimes(1);
});
