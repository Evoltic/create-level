import React from 'react';
import { connect } from 'react-redux';
import {
  changeRows,
  changeColumns
} from '../actions';

import Size from '../components/setting/size/Size.js'


const mapStateToProps = (state, ownProps) => (
  {
    rows: state.array.length,
    columns: state.array[0].length
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onChangeRowsSubmit: (value) => {
      value > 0
        ? dispatch(changeRows(value, ownProps.defaultElement)) : '';
    },
    onChangeColumnsSubmit: (value) => {
      value > 0
        ? dispatch(changeColumns(value, ownProps.defaultElement)) : '';
    }
  }
)


const ChangeSizeContainer = connect(mapStateToProps, mapDispatchToProps)(Size)

export default ChangeSizeContainer;
