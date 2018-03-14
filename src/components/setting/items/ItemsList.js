import React from 'react';

import ItemContainer from '../../../containers/items/ItemContainer.js';


const ItemsList = ({ items }) => {
  let prevElement;
  return (
    <div className="o-items">
      <h2>Items</h2>
      <div className="o-items-list">
        {
          items.map((item, id) => {
            prevElement = id > 0 ? items[id - 1].element : 0;
            return (
              <ItemContainer
                key={item.toString() + id}
                id={id}
                element={item.element}
                prevElement={prevElement}
                defaultElement={items[0].element}
                color={item.color}
              />
            )
          })
        }
      </div>
    </div>
  )
}


export default ItemsList;
