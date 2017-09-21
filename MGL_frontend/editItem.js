import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
//make like get one example in GearList

// class EditItem extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name:'',
//       description:''
//     }
//     this.updateName = this.updateName.bind(this);
//     this.updateDescription = this.updateDescription.bind(this);
//     this.updateItem = this.updateItem.bind(this);
//   }
//
//   updateName(event) {
//     this.setState({ name: event.target.value });
//   }
//
//   updateDescription(event) {
//     this.setState({ description: event.target.value});
//   }
//
//   updateItem(id) {
//     const promise = axios.put(`http://localhost:5000/gear/${id}`);
//     promise.then((response) => {
//       alert(`You have updated ${this.state.name}`);
//       this.setState({
//         GearItem: response.data,
//       });
//     });
//   }
const EditButton = ({ item, handleUpdateName, handleUpdateDescription, handleUpdateItem }) => {
  return(
    <div>
      <form>
        <ListGroup>
          <ListGroupItem> Item Name:
            <input type='text' value={item.name} onChange={() => {handleUpdateName(item.name)}} />
          </ListGroupItem>
          <ListGroupItem> Item Description:
            <input type='text' value={item.description} onChange={() => {handleUpdateDescription(item.description)}} />
          </ListGroupItem>
        </ListGroup>
        <Button
          className="edit"
          bsStyle="primary"
          bsSize="small"
          onClick={() => {handleUpdateName(item.name, item.description)}}>
          Edit Item
        </Button>
      </form>
    </div>
  )
}
export default EditButton;

/*<EditButton item={item}
  handleUpdateName={this.updateName}
  handleUpdateDescription={this.updateDescription}
  handleUpdateItem={this.updateItem}/>*/
