import React from 'react';
import { connect } from 'react-redux';

import ItemsList from '../../components/setting/items/ItemsList.js'

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

const ItemsContainer = connect(mapStateToProps)(ItemsList)

export default ItemsContainer;
