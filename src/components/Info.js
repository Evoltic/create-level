//
// General idea.
//
// Any palyfield can be represented in the form of a table.
//
// Здесь картинки: battle city, mario, React Roguelike
//
//
// Any table can be represented as an array.
//
// const table = [
//                 [1, 1, 1, 1],
//                 [1, 1, 1, 1],
//                 [1, 1, 1, 1]
//               ]
//
// Rows are first level of an array:
//   table[0] is first row;
//   table[1] is second row;
//   ...
//
// Columns are second level:
//   table[0][1] - first row and second column;
//   table[0][2] - first row and third column;
//   table[1][1] - second row and second column;
//   ...
//
// For example our hero stay on "table[4][4] - this is column 5, row 5".
// For check closest cells from left and right we just look
// at "table[4][5], table[4][3]".
//
// Usage:
//
// In setting you can choose between what to pass in your array (table).
// In can be a string ("weapon"), a number(0/1/2...) or a Boolean(true/false).
// In input field you can rename the value and choose the color that represent the
// value on table board.

import React from 'react';

import screenshot from '../img/game_ss.png';
import tableSs from '../img/table_ss.png';

import DelayLink from './DelayLink.js'

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "o-info"
    }
  }

  onCloseClick = () => {
    this.setState({ className: "o-info o-info--closed" })
    setTimeout(() => (
      this.setState({ className: "o-info" })
    ), 290)
  }

  render() {
    return (
      <div className={this.state.className}>
        <h3>General idea</h3>

        <DelayLink to="/" delay={300}>
          <p onClick={this.onCloseClick}>Back</p>
        </DelayLink>
        <h3>work is on :) </h3>
        {/* <p>Any playfield can be represented in the form of a table.</p>
        <img src={screenshot} alt="Game screenshot" />
        <p>And any table can be represented as an array.</p>
        <img src={tableSs} alt="Table screenshot" />
        <p>Rows are first level of an array:
          table[0] is first row;
          table[1] is second row;
          ...

        Columns are second level:
          table[0][1] - first row and second column;
          table[0][2] - first row and third column;
          table[1][1] - second row and second column;
          ...

        For example our hero stay on "table[4][4] - this is column 5, row 5".
        For check closest cells from left and right we just look
        at "table[4][5], table[4][3]".</p> */}
      </div>
    )
  }
}

export default Info;

// Table 4x3

const table = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
