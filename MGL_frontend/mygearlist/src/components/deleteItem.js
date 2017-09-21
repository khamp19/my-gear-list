import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const DeleteButton = ({ item, handleDeleteItem}) => {
  return (
    <Button
      className="deleteButton"
      bsStyle="danger"
      bsSize="small"
      onClick={() => {handleDeleteItem(item._id)}}>
      Delete Item
    </Button>
  )
}
// }
export default DeleteButton;
