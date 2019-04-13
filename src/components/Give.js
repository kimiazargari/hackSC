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
    this.assignTeam = this.assignTeam.bind(this);

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
    this.assignTeam();
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

  assignTeam() {
    //team1
    if (this.props.currentUser.username === 'nilofer_mohammad') {
      Object.assign(this.state, {
        teammate1: 'arthur_huynh',
        teammate2: 'jianglai_zhang',
        teammate3: 'kaautam_suriyan',
        teammate4: 'natalia_flores',
      });
    }
    if (this.props.currentUser.username === 'arthur_huynh') {
      Object.assign(this.state, {
        teammate1: 'nilofer_mohammad',
        teammate2: 'jianglai_zhang',
        teammate3: 'kaautam_suriyan',
        teammate4: 'natalia_flores',
      });
    }
    if (this.props.currentUser.username === 'jianglai_zhang') {
      Object.assign(this.state, {
        teammate1: 'nilofer_mohammad',
        teammate2: 'arthur_huynh',
        teammate3: 'kaautam_suriyan',
        teammate4: 'natalia_flores',
      });
    }
    if (this.props.currentUser.username === 'kaautam_suriyan') {
      Object.assign(this.state, {
        teammate1: 'nilofer_mohammad',
        teammate2: 'arthur_huynh',
        teammate3: 'jianglai_zhang',
        teammate4: 'natalia_flores',
      });
    }
    if (this.props.currentUser.username === 'natalia_flores') {
      Object.assign(this.state, {
        teammate1: 'nilofer_mohammad',
        teammate2: 'arthur_huynh',
        teammate3: 'jianglai_zhang',
        teammate4: 'kaautam_suriyan',
      });
    }
    //team2
    if (this.props.currentUser.username === 'jash_vora') {
      Object.assign(this.state, {
        teammate1: 'niraj_ganesh',
        teammate2: 'leah_kochendoefer',
        teammate3: 'dani_goland',
        teammate4: 'daniel_shaby',
      });
    }
    if (this.props.currentUser.username === 'niraj_ganesh') {
      Object.assign(this.state, {
        teammate1: 'jash_vora',
        teammate2: 'leah_kochendoefer',
        teammate3: 'dani_goland',
        teammate4: 'daniel_shaby',
      });
    }
    if (this.props.currentUser.username === 'leah_kochendoefer') {
      Object.assign(this.state, {
        teammate1: 'jash_vora',
        teammate2: 'niraj_ganesh',
        teammate3: 'dani_goland',
        teammate4: 'daniel_shaby',
      });
    }
    if (this.props.currentUser.username === 'dani_goland') {
      Object.assign(this.state, {
        teammate1: 'jash_vora',
        teammate2: 'niraj_ganesh',
        teammate3: 'leah_kochendoefer',
        teammate4: 'daniel_shaby',
      });
    }
    if (this.props.currentUser.username === 'daniel_shaby') {
      Object.assign(this.state, {
        teammate1: 'jash_vora',
        teammate2: 'niraj_ganesh',
        teammate3: 'leah_kochendoefer',
        teammate4: 'dani_goland',
      });
    }
    //team3
    if (this.props.currentUser.username === 'daniel_yee') {
      Object.assign(this.state, {
        teammate1: 'francesca_ledesma',
        teammate2: 'arya_anand',
        teammate3: 'john_melanzanis',
        teammate4: 'ilse_naranjo',
      });
    }
    if (this.props.currentUser.username === 'francesca_ledesma') {
      Object.assign(this.state, {
        teammate1: 'daniel_yee',
        teammate2: 'arya_anand',
        teammate3: 'john_melanzanis',
        teammate4: 'ilse_naranjo',
      });
    }
    if (this.props.currentUser.username === 'arya_anand') {
      Object.assign(this.state, {
        teammate1: 'daniel_yee',
        teammate2: 'francesca_ledesma',
        teammate3: 'john_melanzanis',
        teammate4: 'ilse_naranjo',
      });
    }
    if (this.props.currentUser.username === 'john_melanzanis') {
      Object.assign(this.state, {
        teammate1: 'daniel_yee',
        teammate2: 'francesca_ledesma',
        teammate3: 'arya_anand',
        teammate4: 'ilse_naranjo',
      });
    }
    if (this.props.currentUser.username === 'ilse_naranjo') {
      Object.assign(this.state, {
        teammate1: 'daniel_yee',
        teammate2: 'francesca_ledesma',
        teammate3: 'arya_anand',
        teammate4: 'john_melanzanis',
      });
    }
    //team4
    if (this.props.currentUser.username === 'jireh_chew') {
      Object.assign(this.state, {
        teammate1: 'milan_le_ruyet',
        teammate2: 'fatma_aydin',
        teammate3: 'yifan_ding',
        teammate4: 'n/a'
      });
    }
    if (this.props.currentUser.username === 'milan_le_ruyet') {
      Object.assign(this.state, {
        teammate1: 'jireh_chew',
        teammate2: 'fatma_aydin',
        teammate3: 'yifan_ding',
        teammate4: 'n/a'
      });
    }
    if (this.props.currentUser.username === 'fatma_aydin') {
      Object.assign(this.state, {
        teammate1: 'jireh_chew',
        teammate2: 'milan_le_ruyet',
        teammate3: 'yifan_ding',
        teammate4: 'n/a'
      });
    }
    if (this.props.currentUser.username === 'yifan_ding') {
      Object.assign(this.state, {
        teammate1: 'jireh_chew',
        teammate2: 'milan_le_ruyet',
        teammate3: 'fatma_aydin',
        teammate4: 'n/a'
      });
    }
    //team5
    if (this.props.currentUser.username === 'ambika_mukherjee') {
      Object.assign(this.state, {
        teammate1: 'chase_aplin',
        teammate2: 'nicky_lofgren',
        teammate3: 'si_pei_tan',
        teammate4: 'stella_bao',
      });
    }
    if (this.props.currentUser.username === 'chase_aplin') {
      Object.assign(this.state, {
        teammate1: 'ambika_mukherjee',
        teammate2: 'nicky_lofgren',
        teammate3: 'si_pei_tan',
        teammate4: 'stella_bao',
      });
    }
    if (this.props.currentUser.username === 'nicky_lofgren') {
      Object.assign(this.state, {
        teammate1: 'ambika_mukherjee',
        teammate2: 'chase_aplin',
        teammate3: 'si_pei_tan',
        teammate4: 'stella_bao',
      });
    }
    if (this.props.currentUser.username === 'si_pei_tan') {
      Object.assign(this.state, {
        teammate1: 'ambika_mukherjee',
        teammate2: 'chase_aplin',
        teammate3: 'nicky_lofgren',
        teammate4: 'stella_bao',
      });
    }
    if (this.props.currentUser.username === 'stella_bao') {
      Object.assign(this.state, {
        teammate1: 'ambika_mukherjee',
        teammate2: 'chase_aplin',
        teammate3: 'nicky_lofgren',
        teammate4: 'si_pei_tan',
      });
    }
    //team6
    if (this.props.currentUser.username === 'smita_balaji') {
      Object.assign(this.state, {
        teammate1: 'saehee_im',
        teammate2: 'alan_pham',
        teammate3: 'aditya_tyagi',
        teammate4: 'raine_scott',
      });
    }
    if (this.props.currentUser.username === 'saehee_im') {
      Object.assign(this.state, {
        teammate1: 'smita_balaji',
        teammate2: 'alan_pham',
        teammate3: 'aditya_tyagi',
        teammate4: 'raine_scott',
      });
    }
    if (this.props.currentUser.username === 'alan_pham') {
      Object.assign(this.state, {
        teammate1: 'smita_balaji',
        teammate2: 'saehee_im',
        teammate3: 'aditya_tyagi',
        teammate4: 'raine_scott',
      });
    }
    if (this.props.currentUser.username === 'aditya_tyagi') {
      Object.assign(this.state, {
        teammate1: 'smita_balaji',
        teammate2: 'saehee_im',
        teammate3: 'alan_pham',
        teammate4: 'raine_scott',
      });
    }
    if (this.props.currentUser.username === 'raine_scott') {
      Object.assign(this.state, {
        teammate1: 'smita_balaji',
        teammate2: 'saehee_im',
        teammate3: 'alan_pham',
        teammate4: 'aditya_tyagi',
      });
    }
    //team7
    if (this.props.currentUser.username === 'bismark_haruna') {
      Object.assign(this.state, {
        teammate1: 'mads_have',
        teammate2: 'kathy_kong',
        teammate3: 'eric_hovagim',
        teammate4: 'caroline_newman',
      });
    }
    if (this.props.currentUser.username === 'mads_have') {
      Object.assign(this.state, {
        teammate1: 'bismark_haruna',
        teammate2: 'kathy_kong',
        teammate3: 'eric_hovagim',
        teammate4: 'caroline_newman',
      });
    }
    if (this.props.currentUser.username === 'kathy_kong') {
      Object.assign(this.state, {
        teammate1: 'bismark_haruna',
        teammate2: 'mads_have',
        teammate3: 'eric_hovagim',
        teammate4: 'caroline_newman',
      });
    }
    if (this.props.currentUser.username === 'eric_hovagim') {
      Object.assign(this.state, {
        teammate1: 'bismark_haruna',
        teammate2: 'mads_have',
        teammate3: 'kathy_kong',
        teammate4: 'caroline_newman',
      });
    }
    if (this.props.currentUser.username === 'caroline_newman') {
      Object.assign(this.state, {
        teammate1: 'bismark_haruna',
        teammate2: 'mads_have',
        teammate3: 'kathy_kong',
        teammate4: 'eric_hovagim',
      });
    }
    //team8
    if (this.props.currentUser.username === 'evelyn_mwangi') {
      Object.assign(this.state, {
        teammate1: 'lucie_kresl',
        teammate2: 'ethan_barnhart',
        teammate3: 'vimala_veeramachaneni',
        teammate4: 'ernest_tan',
      });
    }
    if (this.props.currentUser.username === 'lucie_kresl') {
      Object.assign(this.state, {
        teammate1: 'evelyn_mwangi',
        teammate2: 'ethan_barnhart',
        teammate3: 'vimala_veeramachaneni',
        teammate4: 'ernest_tan',
      });
    }
    if (this.props.currentUser.username === 'ethan_barnhart') {
      Object.assign(this.state, {
        teammate1: 'evelyn_mwangi',
        teammate2: 'lucie_kresl',
        teammate3: 'vimala_veeramachaneni',
        teammate4: 'ernest_tan',
      });
    }
    if (this.props.currentUser.username === 'vimala_veeramachaneni') {
      Object.assign(this.state, {
        teammate1: 'evelyn_mwangi',
        teammate2: 'lucie_kresl',
        teammate3: 'ethan_barnhart',
        teammate4: 'ernest_tan',
      });
    }
    if (this.props.currentUser.username === 'ernest_tan') {
      Object.assign(this.state, {
        teammate1: 'evelyn_mwangi',
        teammate2: 'lucie_kresl',
        teammate3: 'ethan_barnhart',
        teammate4: 'vimala_veeramachaneni',
      });
    }
    //team9
    if (this.props.currentUser.username === 'sunny_zhang') {
      Object.assign(this.state, {
        teammate1: 'raja_rishi',
        teammate2: 'charlie_luy',
        teammate3: 'allison_arvin',
        teammate4: 'ivan_centurion',
      });
    }
    if (this.props.currentUser.username === 'raja_rishi') {
      Object.assign(this.state, {
        teammate1: 'sunny_zhang',
        teammate2: 'charlie_luy',
        teammate3: 'allison_arvin',
        teammate4: 'ivan_centurion',
      });
    }
    if (this.props.currentUser.username === 'charlie_luy') {
      Object.assign(this.state, {
        teammate1: 'sunny_zhang',
        teammate2: 'raja_rishi',
        teammate3: 'allison_arvin',
        teammate4: 'ivan_centurion',
      });
    }
    if (this.props.currentUser.username === 'allison_arvin') {
      Object.assign(this.state, {
        teammate1: 'sunny_zhang',
        teammate2: 'raja_rishi',
        teammate3: 'charlie_luy',
        teammate4: 'ivan_centurion',
      });
    }
    if (this.props.currentUser.username === 'ivan_centurion') {
      Object.assign(this.state, {
        teammate1: 'sunny_zhang',
        teammate2: 'raja_rishi',
        teammate3: 'charlie_luy',
        teammate4: 'allison_arvin',
      });
    }
    //team10
      if (this.props.currentUser.username === 'mehek_mohan') {
      Object.assign(this.state, {
        teammate1: 'kunal_kak',
        teammate2: 'jay_ang',
        teammate3: 'bobby_gill',
        teammate4: 'n/a',
      });
    }
    if (this.props.currentUser.username === 'kunal_kak') {
      Object.assign(this.state, {
        teammate1: 'mehek_mohan',
        teammate2: 'jay_ang',
        teammate3: 'bobby_gill',
        teammate4: 'n/a',
      });
    }
    if (this.props.currentUser.username === 'jay_ang') {
      Object.assign(this.state, {
        teammate1: 'mehek_mohan',
        teammate2: 'kunal_kak',
        teammate3: 'bobby_gill',
        teammate4: 'n/a',
      });
    }
    if (this.props.currentUser.username === 'bobby_gill') {
      Object.assign(this.state, {
        teammate1: 'mehek_mohan',
        teammate2: 'kunal_kak',
        teammate3: 'jay_ang',
        teammate4: 'n/a',
      });
    }
    //team11
    if (this.props.currentUser.username === 'kimia_zargari') {
      Object.assign(this.state, {
        teammate1: 'cristiano_lacerda',
        teammate2: 'wesley_graham',
        teammate3: 'emerson_ng',
        teammate4: 'dominic_hugo',
      });
    }
    if (this.props.currentUser.username === 'cristiano_lacerda') {
      Object.assign(this.state, {
        teammate1: 'kimia_zargari',
        teammate2: 'wesley_graham',
        teammate3: 'emerson_ng',
        teammate4: 'dominic_hugo',
      });
    }
    if (this.props.currentUser.username === 'wesley_graham') {
      Object.assign(this.state, {
        teammate1: 'kimia_zargari',
        teammate2: 'cristiano_lacerda',
        teammate3: 'emerson_ng',
        teammate4: 'dominic_hugo',
      });
    }
    if (this.props.currentUser.username === 'emerson_ng') {
      Object.assign(this.state, {
        teammate1: 'kimia_zargari',
        teammate2: 'cristiano_lacerda',
        teammate3: 'wesley_graham',
        teammate4: 'dominic_hugo',
      });
    }
    if (this.props.currentUser.username === 'dominic_hugo') {
      Object.assign(this.state, {
        teammate1: 'kimia_zargari',
        teammate2: 'cristiano_lacerda',
        teammate3: 'wesley_graham',
        teammate4: 'emerson_ng',
      });
    }
    //team12
      if (this.props.currentUser.username === 'viraj_attre') {
      Object.assign(this.state, {
        teammate1: 'chibuzo_nwokocha',
        teammate2: 'aakarsh_gupta',
        teammate3: 'edward_yang',
        teammate4: 'n/a',
      });
    }
    if (this.props.currentUser.username === 'chibuzo_nwokocha') {
      Object.assign(this.state, {
        teammate1: 'viraj_attre',
        teammate2: 'aakarsh_gupta',
        teammate3: 'edward_yang',
        teammate4: 'n/a',
      });
    }
    if (this.props.currentUser.username === 'aakarsh_gupta') {
      Object.assign(this.state, {
        teammate1: 'chibuzo_nwokocha',
        teammate2: 'viraj_attre',
        teammate3: 'edward_yang',
        teammate4: 'n/a',
      });
    }
    if (this.props.currentUser.username === 'edward_yang') {
      Object.assign(this.state, {
        teammate1: 'chibuzo_nwokocha',
        teammate2: 'viraj_attre',
        teammate3: 'aakarsh_gupta',
        teammate4: 'n/a',
      });
    }
  }

  onClick(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScosYbTb8k86h09U04jywhp6GQBZD_xVyByKzfHJBwWLp8zqA/viewform?usp=sf_link", '_blank');
}

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <fieldset>

        <button
          className="btn btn-lg pull-xs-right btn-primary"
          type="button"
          disabled={this.props.inProgress}
          onClick={this.onClick}>
          Start
        </button>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              value={this.state.teammate1}
              />
          </fieldset>

        <button
          className="btn btn-lg pull-xs-right btn-primary"
          type="button"
          disabled={this.props.inProgress}
          onClick={this.onClick}>
          Start
        </button>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              value={this.state.teammate2}
              />
          </fieldset>

        <button
          className="btn btn-lg pull-xs-right btn-primary"
          type="button"
          disabled={this.props.inProgress}
          onClick={this.onClick}>
          Start
        </button>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              value={this.state.teammate3}
              />
          </fieldset>

        <button
          className="btn btn-lg pull-xs-right btn-primary"
          type="button"
          disabled={this.props.inProgress}
          onClick={this.onClick}>
          Start
        </button>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              value={this.state.teammate4}
              />
          </fieldset>

        </fieldset>
      </form>
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
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">

              <h3 className="text-xs-center">Evaluate Your Team</h3>

              <ListErrors errors={this.props.errors}></ListErrors>

              <SettingsForm
                currentUser={this.props.currentUser}
                onSubmitForm={this.props.onSubmitForm} />

              <hr />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Give);
export {SettingsForm};
