import React from 'react';

const Item = ({ item, description, handleGetSingleItem }) => {
  return (
    <div onClick={() => {handleGetSingleItem(item._id)}}>
      <h4>{`${item.name}`}</h4>
      <p>{`${item.description}`}</p>
    </div>
  );
};

export default Item;
