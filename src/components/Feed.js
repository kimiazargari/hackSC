import ListErrors from './ListErrors';
import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { StreamApp, StatusUpdateForm, FlatFeed } from 'react-activity-feed';
import 'react-activity-feed/dist/index.es.css';
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



class Feed extends React.Component {

    StateEnum = {
      LOADING: 1,
      SUCCESS: 2,
      ERROR: 3
    };

  constructor(props) {
    super(props)  

    this.state = {
        state: this.StateEnum.LOADING,
        results: [],
        errorMessage: '',
        isLoaded: false
    }
  }

componentDidMount() {
  fetch(
        "https://api.transposit.com/app/kimiazargari/applicant_tracker/api/v1/execute/populate_applicant_info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ parameters: {
            "baseId": "appzcI85OlO2fvmar"
          }})
        }
    )
    .then(response => {
      return response.json();
    })
    .then(d => {
      this.setState({ results: d.result.results, isLoaded: true});
      console.log('dede', d)
      //console.log("state", this.state.results)
      //console.log('state attributes', this.state.results.result.results)
      //console.log('ay1', this.state.results.result.results)
      //console.log('inside kimia', this.state.results.result.results[0].fields.name)
    })
    .catch(error => console.log(error))
    //console.log('ayyyyy1', this.state.results)

    // for(var i = 0; i < json.length; i++) {
    // var obj = json[i];

    //console.log(obj.id);
}

  render() 
  {
    let {isLoaded} = this.state

    let{results} = this.state

    //console.log('ay2', results.result)

    if (!isLoaded) {
      return <p> Loading ... </p>
    } else {
    return (
<div className="settings-page">
    <div className="container page">
    {/*<h3 className="text-xs-center">your newsfeed</h3>*/}
    <div className="bannerbanner">
      <div className="container">
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;

<div class="quiz-window">
  <div class="quiz-window-header">
    <div class="quiz-window-title">Interested to see what your friends are buying?</div>
  </div>
  <div class="quiz-window-body">
    <div class="gui-window-awards">
      {/*<ul class="guiz-awards-row guiz-awards-header">
        <li class="guiz-awards-header-star">&nbsp;</li>
        <li class="guiz-awards-header-title">Award</li>
        <li class="guiz-awards-header-track">This Track</li>
        <li class="guiz-awards-header-time">All Time</li>
      </ul>*/}


      <ul class="guiz-awards-row guiz-awards-row-even">
        <li class="guiz-awards-star"><img width="100" height="100" src={require('./images/kimia.png')} /></li>
        <li class="guiz-awards-title">Kimia Zargari
          <div class="guiz-awards-subtitle">9 hrs ago</div>
        </li>
        <li class="guiz-awards-track"><img width="100" height="100" src={require('./images/jean.png')} /></li>
        <div>💙</div>
        <button onClick='http://localhost:4100/attendy' class="bluebutton">Try on!</button>
      </ul>




      <ul class="guiz-awards-row guiz-awards-row-even">
        <li class="guiz-awards-star"><img width="100" height="100" src={require('./images/bardia.png')} /></li>
        <li class="guiz-awards-title">Bardia Barahman
          <div class="guiz-awards-subtitle">14 hrs ago</div>
        </li>
        <li class="guiz-awards-track"><img width="100" height="100" src={require('./images/jacket1.png')} /></li>
        <div>💙</div>
        <button class="bluebutton">Try on!</button>
      </ul>


      <ul class="guiz-awards-row guiz-awards-row-even">
        <li class="guiz-awards-star"><img width="100" height="100" src={require('./images/lily.png')} /></li>
        <li class="guiz-awards-title">Kimia Zargari
          <div class="guiz-awards-subtitle">18 hrs ago</div>
        </li>
        <li class="guiz-awards-track"><img width="100" height="100" src={require('./images/jean2.png')} /></li>
        <div>💙</div>
        <button class="bluebutton">Try on!</button>
      </ul>



      <ul class="guiz-awards-row guiz-awards-row-even">
        <li class="guiz-awards-star"><img width="100" height="100" src={require('./images/alex.png')} /></li>
        <li class="guiz-awards-title">Alexander Fred
          <div class="guiz-awards-subtitle">23 hrs ago</div>
        </li>
        <li class="guiz-awards-track"><img width="100" height="100" src={require('./images/jacket3.png')} /></li>
        <div>💙</div>
        <button class="bluebutton">Try on!</button>
      </ul>



      <ul class="guiz-awards-row guiz-awards-row-even">
        <li class="guiz-awards-star"><img width="100" height="100" src={require('./images/sydney.png')} /></li>
        <li class="guiz-awards-title">Sydney Odman
          <div class="guiz-awards-subtitle">1 day ago</div>
        </li>
        <li class="guiz-awards-track"><img width="100" height="100" src={require('./images/jean.png')} /></li>
        <div>💙</div>
        <button class="bluebutton">Try on!</button>
      </ul>

      <ul class="guiz-awards-row guiz-awards-row-even">
        <li class="guiz-awards-star"><img width="100" height="100" src={require('./images/sunny.png')} /></li>
        <li class="guiz-awards-title">Sunny Karim
          <div class="guiz-awards-subtitle">9 hrs ago</div>
        </li>
        <li class="guiz-awards-track"><img width="100" height="100" src={require('./images/jacket6.png')} /></li>
        <div>💙</div>
        <button class="bluebutton">Try on!</button>
      </ul>


    </div>
    <div class="guiz-awards-buttons"><button class="guiz-awards-but-back"><i class="fa fa-angle-left"></i> Back</button></div>
  </div>
</div>






        <div/> &nbsp;
        <div/> &nbsp;
        <p className="bannertitle">hi</p>
        <div/> &nbsp;
      </div>
    </div>
    </div>
    </div>
    );
  }
  }
}

export default Feed;
