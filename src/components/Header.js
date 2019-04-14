import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        {/*<li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>*/}

        <li className="nav-item">
          <Link to="/login" className="navbartitle2">
            login using blockstack
          </Link>
        </li>

        {/*<li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>*/}

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div>
      <div> &nbsp;</div>
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/feed" className="navbartitle2">
            FEED
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={/cases}/}
            className="navbartitle2">
            SHOP
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/cases" className="navbartitle2">
          FRIENDS
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/attendy" className="navbartitle2">
          FITTING ROOM
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="navbartitle2">
          LOGOUT
          </Link>
        </li>

      </ul>
      </div>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/give" className="navbartitle">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
