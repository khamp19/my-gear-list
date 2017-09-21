import React, { Component } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description:'',
    };
  this.handleName = this.handleName.bind(this);
  this.handleDescription = this.handleDescription.bind(this);
  this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }

    handleAddItem() {
    const promise = axios.post('http://localhost:5000/gear', this.state);
    promise.then((response) => {
      // console.log(this.state);
      // alert(`You have added ${this.state.name} to your list`);
      this.setState({
        name:'',
        description:'',
      });
    });
  }

  render() {
    return(
      <div className="newItemForm">
        <form>
          <ListGroup>
            <ListGroupItem> Item Name:
              <input type='text'
                label="Item Name"
                placeholder="Enter item name"
                value={this.state.name}
                onChange={this.handleName} />
            </ListGroupItem>
            <ListGroupItem> Item Description:
                <input type='text'
                  className="newItemDescription"
                  placeholder="Describe your item here"
                  value={this.state.description}
                  onChange={this.handleDescription}/>
              </ListGroupItem>
            </ListGroup>
            <Button bsStyle="success" onClick={this.handleAddItem}>Add Item</Button>
        </form>
      </div>
    )
  };
}

export default NewItem;
