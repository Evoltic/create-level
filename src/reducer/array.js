const defaultArray = [];
for (let x = 0; x < 30; x++) {
  defaultArray.push([]);
  for (let y = 0; y < 50; y++) {
    defaultArray[x].push(0);
  }
}

const array = (state = defaultArray, action) => {
  const rows = state.length;
  const columns = state[0].length;

  switch (action.type) {
    case 'CHANGE_ROWS':
      if (action.rows < rows) {
        return state.slice(0, action.rows)

      } else if (action.rows > rows) {
        let stateExtension = [];
        const rowsDifference = action.rows - rows;

        for (let x = 0; x < rowsDifference; x++) {
          stateExtension.push([])
          for (let y = 0; y < columns; y++) {
            stateExtension[x].push(action.defaultElement)
          }
        }
        return [...state, ...stateExtension];
      }

    case 'CHANGE_COLUMNS':
      if (action.columns < columns) {
        return state.map(row => row.slice(0, action.columns))

      } else if (action.columns > columns) {
        let stateExtension = [];
        const columnsDifference = action.columns - columns;

        for (let y = 0; y < columnsDifference; y++) {
          stateExtension.push(action.defaultElement)
        }
        return state.map(row => [...row, ...stateExtension])
      }

    case 'ADD_ELEMENT_ON_TABLE':
      return state.map((row, rowIndex) => (

        rowIndex === action.rowIndex
          ? row.map((element, columnIndex) => (

              columnIndex === action.columnIndex
                ? action.element
                  : element
            ))
            : row
      ))

    case 'IMPORT_ARRAY':
      return action.array;

    case 'CLEAR_TABLE':
      return state.map(row => row.map(elem => action.defaultElement));

    case 'CHANGE_ELEMENTS_ON_TABLE':
      return state.map(row => (
        row.map(element => (
          element === action.oldElement
            ? action.newElement
              : element
        ))
      ))

    default:
      return state;
  }
}

export default array;
