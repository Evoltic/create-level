import React from 'react';
import { connect } from 'react-redux';
import {
  selectElement,
  changeElement,
  changeElementsOnTable
} from '../../actions';

import Element from '../../components/setting/items/Element.js'

import checkElement from '../../func/checkElement.js'


const mapStateToProps = (state, ownProps) => (
  {
    element: state.items[ownProps.id].element,
    items: state.items,
    id: ownProps.id
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onSubmit: (oldElement, id, newElement, items) => {
      const checkedElement = checkElement(newElement, items);
      if (checkedElement !== 'elementFailedTest') {
        dispatch(changeElementsOnTable(oldElement, checkedElement));
        dispatch(changeElement(id, checkedElement));
        dispatch(selectElement(checkedElement));
      } else {
        alert(`Sorry, but you already have the "${newElement}"`)
      }
    }
  }
)


const ElementContainer = connect(mapStateToProps, mapDispatchToProps)(Element)

export default ElementContainer;
