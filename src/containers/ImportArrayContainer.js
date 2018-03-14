import React from 'react';
import { connect } from 'react-redux';

import { importArray, selectElement, updateItems } from '../actions';

import ImportArray from '../components/setting/ImportArray.js'


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const getItemsList = (elementsList) => {
  return elementsList.map((element, index) => (
    index !== 0
      ? { element, color: getRandomColor() }
        : { element, color: '#fff' }
  ))
}


const pickNewItems = (array) => {
  let elementsList = [];

  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < array[0].length; columnIndex++) {
      //if the items list hasnt same element then pass element to the list
      elementsList.findIndex(elem => (
        elem === array[rowIndex][columnIndex])) === -1
          ? elementsList.push(array[rowIndex][columnIndex]) : ''
    }
  }
  //instead of return list of elements return list of items:
  // [ {element: element[0], color: 'fff'},
  //   {element: element[1], color: '000'},
  //   ...
  // ]
  return getItemsList(elementsList);
}


const isArrayLengthValid = (array) => {
  //every row must be the same size (row length is a number of columns)
  const lengthOfFirstRow = array[0].length;

  if ( !(lengthOfFirstRow > 1) ) {
    return false
  }

  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    if (array[rowIndex].length !== lengthOfFirstRow) {
      return false;
    }
  }

  return true;

  //also size must be less than 150
}


const checkArray = (array) => {
  try {
    return JSON.parse(array);
  } catch(e) {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClick: (jsonArray) => {
      const array = checkArray(jsonArray);

      if ( typeof array !== 'undefined' && isArrayLengthValid(array) ) {
        dispatch(importArray(array)),
        //we must update the list of items with items from passed array
        dispatch(updateItems( pickNewItems(array) )),
        dispatch(selectElement(array[0][0]))
      } else {
        alert("Passed value isn't valid")
      }
    }
  }
)


const ImportArrayContainer = connect(
  null,
  mapDispatchToProps
)(ImportArray)

export default ImportArrayContainer;
