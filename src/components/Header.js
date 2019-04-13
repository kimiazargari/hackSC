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
          <Link to="/login" className="nav-link">
            login
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
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/give" className="nav-link">
            <i className="ion-compose"></i>&nbsp;give
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            {/*{props.currentUser.username}'s feedback*/}
            receive
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/cases" className="nav-link">
            <i className="ion-ios-book"></i>&nbsp;cases
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/attendy" className="nav-link">
            attendy
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;logout
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
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
