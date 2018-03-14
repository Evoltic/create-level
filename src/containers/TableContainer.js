import React from 'react';
import { connect } from 'react-redux';

import { addElementOnTable } from '../actions';

import Table from '../components/Table.js'


const mapStateToProps = state => ({
  array: state.array,
  items: state.items,
  selectedElement: state.selectedElement
})

const mapDispatchToProps = dispatch => {
  return {
    addElementOnTable: (rowIndex, columnIndex, element) => {
      dispatch(addElementOnTable(rowIndex, columnIndex, element));
    }
  }
}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);

export default TableContainer;
