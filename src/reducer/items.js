export const defaultItems = [
  {
    color: '#eef2f3',
    element: 0
  },
  {
    color: '#262626',
    element: 1
  },
  {
    color: '#1e90ff',
    element: "hero"
  },
  {
    color: '#008000',
    element: "healthBox"
  },
  {
    color: '#ffa500',
    element: "weapon"
  }
]

const items = (state = defaultItems, action) => {
  switch (action.type) {
    case 'ADD_NEW_ELEMENT':
      return [
        ...state,
        {
          element: action.element,
          color: "black"
        }
      ]

    case 'DELETE_ITEM':
      return state.filter((item, id) => id !== action.id);

    case 'CHANGE_ELEMENT':
      return state.map((item, id) => (
        id === action.id
          ? { color: item.color, element: action.newElement }
            : item
      ))

    case 'CHANGE_COLOR':
      return state.map((item, id) => (
        id === action.id
          ? { color: action.newColor, element: item.element }
            : item
      ))

    case 'UPDATE_ITEMS':
      return action.newItems;

    default:
      return state;
  }
}

export default items
