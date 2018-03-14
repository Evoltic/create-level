import React from 'react';

const SizeForm = ({ name, number, onSubmit }) => {
  let input;
  return (
    <div className="o-size-form-div">
      <p>{ name }: </p>
      <form
        className="o-size-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(input.value);
          input.value = "";
        }}
      >
        <input
          type="number"
          min="1"
          max="150"
          placeholder={number}
          ref={node => input = node}
          size="4"
          maxLength="3"
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SizeForm;
