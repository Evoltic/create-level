import React from 'react';
import { connect } from 'react-redux';
import {
  selectElement,
  deleteItem,
  changeElementsOnTable,
  changeColor
} from '../../actions';

import Item from '../../components/setting/items/Item.js'

const mapStateToProps = (state, ownProps) => (
  {
    id: ownProps.id,
    color: ownProps.color,
    isSelected: ownProps.element === state.selectedElement
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onSelectItemClick: () => {
      dispatch(selectElement(ownProps.element))
    },
    onDltClick: () => {
      const deletedElement = ownProps.element;
      dispatch(selectElement(ownProps.prevElement));
      dispatch(changeElementsOnTable(deletedElement, ownProps.defaultElement));
      dispatch(deleteItem(ownProps.id));
    },
    changeColor: (color, id) => {
      dispatch(changeColor(id, color))
    }
  }
)


const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item)

export default ItemContainer;
