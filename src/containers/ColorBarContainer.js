import React from 'react';
import { connect } from 'react-redux';
import { selectElement } from '../actions'

import ColorBar from '../components/ColorBar.js'


const mapStateToProps = (state, ownProps) => (
  {
    items: state.items,
    selectedElement: state.selectedElement
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClick: (element) => {
      dispatch(selectElement(element))
    }
  }
)


const ColorBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorBar)

export default ColorBarContainer;
