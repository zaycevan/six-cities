import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {PageType, AppRoute} from "@src/const";
import {mapStateToProps} from "./header-connect";

const Header = (props) => {
  const {type, user} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className={`header__logo-link ${type === PageType.MAIN ? `header__logo-link--active` : ``}`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={user ? AppRoute.FAVORITES : AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {user ?
                    <span className="header__user-name user__name">{user}</span> :
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
  user: PropTypes.string,
};

export {Header};
export default connect(mapStateToProps)(Header);
