import React from 'react';

const NewElementForm = ({ onSubmit, items }) => {
  let input;

  return (
    <form
      className="o-new-item"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input.value, items)
        input.value = "";
      }}
    >
      <input
        ref={node => input = node}
        type="text"
        placeholder="Add new item"
      />
      <button type="submit" value="Submit">Add</button>
    </form>
  )
}

export default NewElementForm;
