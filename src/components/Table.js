import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { addElementOnTable } from '../actions'


class Table extends Component {
  onMouseOver = (rowIndex, columnIndex) => {
    const newElement = this.props.selectedElement;
    this.props.addElementOnTable(rowIndex, columnIndex, newElement);
  }

  render() {
    return(
      <table className="o-table">
        <tbody>
          {
            this.props.array.map((row, rowIndex) => (

              <tr key={"tableRow" + rowIndex}>

                {
                  row.map((element, columnIndex) => (

                    <td
                      key={"tableColumn" + columnIndex}

                      //omMouseDown, onMouseOver, onMouseUp needed for painting

                      onMouseDown={() => (this.onMouseDown = true)}

                      onMouseOver={() => (
                        this.onMouseDown
                          ? this.onMouseOver(rowIndex, columnIndex)
                            : ''
                      )}

                      onMouseUp={() => (this.onMouseDown = false)}

                      onClick={() => this.onMouseOver(rowIndex, columnIndex)}

                      style={{
                        backgroundColor:  this.props.items.find(item =>
                          item.element === element
                        ).color
                      }}

                    />

                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}


export default Table;


// const existingElement = this.props.array[rowIndex][columnIndex];
// const defaultElement = this.props.items[0].element;
// if (newElement !== existingElement) {
//   this.props.addElementOnTable(rowIndex, columnIndex, newElement);
// } else if (newElement === existingElement) {
//   this.props.addElementOnTable(rowIndex, columnIndex, defaultElement)
// }
