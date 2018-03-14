import React from 'react';

import SizeForm from './SizeForm.js'

const Size = ({ onChangeRowsSubmit, onChangeColumnsSubmit, rows, columns }) => (
  <div className="o-table-size">
    <h2 className="c-size-name">Table size</h2>
    <SizeForm
      name={"Columns"}
      number={columns}
      onSubmit={(value) => onChangeColumnsSubmit(value)}
    />
    <SizeForm
      name={"Rows"}
      number={rows}
      onSubmit={(value) => onChangeRowsSubmit(value)}
    />
  </div>
)

export default Size;
