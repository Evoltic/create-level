export const addElementOnTable = (rowIndex, columnIndex, element) => (
  {
    type: 'ADD_ELEMENT_ON_TABLE',
    rowIndex,
    columnIndex,
    element
  }
)

export const updateItems = (newItems) => (
  {
    type: 'UPDATE_ITEMS',
    newItems
  }
)

export const importArray = (array) => (
  {
    type: 'IMPORT_ARRAY',
    array
  }
)

export const clearTable = (defaultElement) => (
  {
    type: 'CLEAR_TABLE',
    defaultElement
  }
)

export const changeRows = (rows, defaultElement) => (
  {
    type: 'CHANGE_ROWS',
    rows,
    defaultElement
  }
)

export const changeColumns = (columns, defaultElement) => (
  {
    type: 'CHANGE_COLUMNS',
    columns,
    defaultElement
  }
)


export const addNewElement = (element) => (
  {
    type: 'ADD_NEW_ELEMENT',
    element
  }
)

export const deleteItem = (id) => (
  {
    type: 'DELETE_ITEM',
    id
  }
)

export const changeElement = (id, newElement) => (
  {
    type: 'CHANGE_ELEMENT',
    id,
    newElement
  }
)

export const changeColor = (id, newColor) => (
  {
    type: 'CHANGE_COLOR',
    id,
    newColor
  }
)

export const changeElementsOnTable = (oldElement, newElement) => (
  {
    type: 'CHANGE_ELEMENTS_ON_TABLE',
    oldElement,
    newElement
  }
)

export const selectElement = (element) => (
  {
    type: 'SELECT_ELEMENT',
    element
  }
)
