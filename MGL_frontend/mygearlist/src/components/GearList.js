import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';
import DeleteButton from './deleteItem';

class GearList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GearList: [],
    };
    this.getSingleItem = this.getSingleItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateDescription(event) {
    this.setState({ description: event.target.value});
  }

  updateItem(id) {
    const promise = axios.put(`http://localhost:5000/gear/${id}`);
    promise.then((response) => {
      alert(`You have updated ${this.state.name}`);
      this.setState({
        GearItem: response.data,
      });
    });
  }

  getSingleItem (id) {
    const promise = axios.get(`http://localhost:5000/gear/${id}`);
    promise.then((response) => {
      console.log(response.data);
    });
  }

  //handle delete item
  deleteItem(id) {
    const promise = axios.delete(`http://localhost:5000/gear/${id}`);
    promise.then((response) => {
      this.setState({
        GearItem: response.data,
      });
    });
  }

  componentDidMount() {
    const promise = axios.get('http://localhost:5000/gear');
    promise.then((response) => {
      this.setState({
        GearList: response.data,
      });
    });
  }

render () {
    return(
      <div>
        <h2>Gear List</h2>
        <div className="appContainer">
          {this.state.GearList.map((item, i) => {
            return (
              <div className="item">
                <Item key={i} item={item} handleGetSingleItem={this.getSingleItem}/>
                <DeleteButton item={item} handleDeleteItem={this.deleteItem}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default GearList;
