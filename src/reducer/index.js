import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { defaultItems } from './items.js'

import array from './array.js'
import items from './items.js'

const selectedElement = ( state = defaultItems[1].element, action ) => (
  action.type === 'SELECT_ELEMENT'
    ? action.element : state
)

const setting = combineReducers({
  array,
  items,
  selectedElement,
  router: routerReducer,
})

export default setting;
