import React from 'react';


const ImportArray = ({ onClick }) => {
  let textArea;
  return (
    <div className="o-import">
      <div
        className="c-import-array"
        onClick={() => {
          onClick(textArea.value);
          textArea.value = ''
        }}
        >
          <p>Import array</p>
      </div>
      <textarea
        className="c-import-area"
        ref={node => textArea = node}
        defaultValue = ''
      />
    </div>
  )
}

export default ImportArray;
