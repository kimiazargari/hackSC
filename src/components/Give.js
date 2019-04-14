import ListErrors from './ListErrors';
import React from 'react';
import _ from 'lodash';
import isEqual from 'lodash/isEqual';
import agent from '../agent';
import { connect } from 'react-redux';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT
} from '../constants/actionTypes';

class SettingsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
      dropdownOpen: false,
      team:'',
      teammate1: '',
      teammate2: '',
      teammate3: '',
      teammate4: '',
    };

    this.toggle = this.toggle.bind(this);

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();

      const user = Object.assign({}, this.state);
      if (!user.password) {
        delete user.password;
      }

      this.props.onSubmitForm(user);
    };
  }

  componentWillMount() {
    if (this.props.currentUser) {
      Object.assign(this.state, {
        image: this.props.currentUser.image || '',
        username: this.props.currentUser.username,
        bio: this.props.currentUser.bio,
        email: this.props.currentUser.email
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        image: nextProps.currentUser.image || '',
        username: nextProps.currentUser.username,
        bio: nextProps.currentUser.bio,
        email: nextProps.currentUser.email
      }));
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onClick(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScosYbTb8k86h09U04jywhp6GQBZD_xVyByKzfHJBwWLp8zqA/viewform?usp=sf_link", '_blank');
}

  render() {
    return (
      <div/>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: user =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED })
});

class Give extends React.Component {

  render() {
    return (
      <div className="settings-page">
        <div className="container page">

              {/*<h3 className="text-xs-center">your newsfeed</h3>*/}
    <div className="bannerbanner">
      <div className="container">
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
        <h1 className="logo-font">
          the new way to shop
        </h1>
        <div/> &nbsp;
        <div/> &nbsp;
        <p className="bannertitle">welcome to the TailoredBrands virtual fitting room where we find clothes that look good on you so you don't have to. </p>
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
          <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
      </div>
    </div>

              <ListErrors errors={this.props.errors}></ListErrors>

              <SettingsForm
                currentUser={this.props.currentUser}
                onSubmitForm={this.props.onSubmitForm} />

            </div>
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Give);
export {SettingsForm};
