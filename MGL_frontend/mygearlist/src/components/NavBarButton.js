import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class NavBarButton extends Component {
  render() {
    return(
      <button>
        {this.props.text }
      </button>
    );
  }
}
