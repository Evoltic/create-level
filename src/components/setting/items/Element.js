import React from 'react';

const Element = ({ id, items, element, onSubmit }) => {
  let input;
  return (
    <form
      className="o-element-from"
      onSubmit={ e => {
        e.preventDefault();
        onSubmit(element, id, input.value, items);
        input.value = "";
      }}
    >
      <input
        type="text"
        placeholder={element.toString()}
        ref={node => input = node}
        size="4"
      />
      <button type="submit" value="Submit">
        Change
      </button>
    </form>
  )
}

export default Element;
