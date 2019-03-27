import {
  CHANGE_FILTER,
  ADD_ITEM
} from '../constants/ActionTypes.js'

const initialState = {
  filter: 'all',
  items: [
    'open: example string',
    'open: nothing matter',
    'close: clear thoughts',
    'open: open mind',
    'close: red cat'
  ]
}

export default function example(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: action.value,
        ...state
      }
    case ADD_ITEM:
      return {
        items: [
          action.item,
          ...state.items
        ],
        ...state
      }
    default:
      return state
  }
}