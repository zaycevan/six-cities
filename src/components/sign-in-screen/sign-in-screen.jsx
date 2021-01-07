import {Link, Redirect} from "react-router-dom";
import Header from "@components/header/header-connect";
import {PageType, AppRoute, AuthorizationStatus} from "@src/const";
import {isValidEmail} from "@utils/common";

const SignInScreen = (props) => {
  const loginRef = React.createRef();
  const passwordRef = React.createRef();

  const handleInput = (evt) => {
    if (!isValidEmail(loginRef.current.value)) {
      evt.target.setCustomValidity(`Please enter valid email "login@domen.ru"`);
    } else {
      evt.target.setCustomValidity(``);
    }
  };

  const handleSubmit = (evt) => {
    const {onSubmit} = props;
    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    evt.preventDefault();
    if (isValidEmail(login) && password.length > 0) {
      onSubmit({
        login,
        password,
      });
    }
  };

  const {authorizationStatus, currentCity} = props;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={AppRoute.ROOT} />
    );
  }

  return (
    <div className="page page--gray page--login">
      <Header
        type={PageType.LOGIN}
      />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  onInput={handleInput}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.ROOT} className="locations__item-link">
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignInScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export {SignInScreen};
