import React from 'react';
import ColorBox from './ColorBox.js';
import ElementContainer from '../../../containers/items/ElementContainer.js';

const Item = ({ id, onSelectItemClick, onDltClick, isSelected, color, changeColor }) => (
  <ul
    className={
      isSelected
        ? "o-item item--selected"
          : "o-item item--not-selected"
    }
  >
    <li
      className="c-item-select"
      onClick={onSelectItemClick}
    >
      <i className="far fa-circle"></i>
    </li>

    <li className="o-item-color">
      <ColorBox color={color}
                changeColor={(newColor) => changeColor(newColor, id)}
       />
    </li>
    {/* Если colorbox clicked меняется ElementContainer меняется на color  */}
    <li className="o-input-element">
      <ElementContainer id={id} />
    </li>

    <li
      className="c-item-dlt"
      onClick={onDltClick}
    >
      {/* delete symbole */}
      &#9932;
    </li>
  </ul>
)


export default Item;
