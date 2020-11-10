import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Header from "@components/header/header";
import {PageType, AppRoute} from "@src/const";
import {mapStateToProps, mapDispatchToProps} from "./sign-in-screen-connect";

class SignInScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();
    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {currentCity} = this.props;

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
                onSubmit={this.handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={this.loginRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={this.passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required=""
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
  }
}

SignInScreen.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export {SignInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
