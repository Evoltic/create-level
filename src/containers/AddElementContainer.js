import React from 'react';
import { connect } from 'react-redux';
import { addNewElement } from '../actions';

import NewElementForm from '../components/setting/NewElementForm.js'

import checkElement from '../func/checkElement.js'


const mapStateToProps = (state) => (
  {
    items: state.items
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onSubmit: (newElement, items) => {
      const checkedElement = checkElement(newElement, items);
      if (checkedElement !== 'elementFailedTest') {
        dispatch(addNewElement(checkedElement));
      } else {
        alert(`Sorry, but you already have the "${newElement}"`)
      }
    }
  }
)


const AddElementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewElementForm)

export default AddElementContainer;
