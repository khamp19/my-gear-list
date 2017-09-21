import React, {Component} from 'react';
import NavBarButton from './NavBarButton';

export default class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <NavBarButton text={'Home'}/>
        <NavBarButton text={'FAQ'}/>
        <NavBarButton text={'About'}/>
        <NavBarButton text={'Log In'}/>
      </div>
    );
  }
}
