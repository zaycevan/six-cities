import {Link} from "react-router-dom";
import {PageType} from "@src/const";

const Header = (props) => {
  const {type} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={`/`} className={`header__logo-link ${type === PageType.MAIN ? `header__logo-link--active` : ``}`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={`/login`} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {type !== PageType.LOGIN ?
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span> :
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
};

export default Header;
