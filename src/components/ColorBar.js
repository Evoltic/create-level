import React from 'react';

const ColorBar = ({ items, onClick, selectedElement }) => (
  <ul className="o-color-bar">
    {
      items.map(item => (
        <li
          key={"colorBar" + item.element}
          onClick={() => onClick(item.element)}
          style={{ backgroundColor: item.color }}
          className={
            item.element === selectedElement
              ? "c-color c-color--selected"
                : "c-color c-color--not-selected"
          }
        />
      ))
    }
  </ul>
)

export default ColorBar;
