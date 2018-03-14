import React from 'react';
import { connect } from 'react-redux';

import { clearTable } from '../../actions/index.js'


const ClearTable = ({ defaultElement, onClick }) => (
  <div
    className="c-clear-table"
    onClick={() => onClick(defaultElement)}
  >
    <p>Clear table</p>
  </div>
)


const mapDispatchToProps = dispatch => (
  {
    onClick: (defaultElement) => {
      dispatch(clearTable(defaultElement))
    }
  }
)

export default connect(null, mapDispatchToProps)(ClearTable);
