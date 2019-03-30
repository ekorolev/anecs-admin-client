import { combineReducers } from 'redux'
import createActionsConstants from './CreateActionsConstants'

export default (itemsName) => {
  const Constants = createActionsConstants(itemsName)

  const items = (state = [], action) => {
    switch (action.type) {
      case Constants.SET_ITEMS:
        return [
          ...action.payload
        ]
      case Constants.DELETE_ITEM:
        return state.filter(item => item._id !== action.payload)
      case Constants.UPDATE_ITEM:
        return state.map(item => {
          if (item._id === action.payload.id) {
            item = { ...item, ...action.payload.update }
          }
          return Object.assign({}, item)
        })
      case Constants.ADD_ITEM:
        return [
          action.payload,
          ...state
        ]
      default:
        return state
    }
  }

  const count = (state = 0, action) => {
    switch (action.type) {
      case Constants.SET_ITEMS_AMOUNT:
        return action.payload
      case Constants.DECREMENT_ITEMS_AMOUNT:
        return --state
      case Constants.INCREMENT_ITEMS_AMOUNT:
        return ++state
      default:
        return state
    }
  }
  
  const isLoading = (state = false, action) => {
    switch (action.type) {
      case Constants.SET_ITEMS_IS_LOADING:
        return !!action.payload
      default:
        return state
    }
  }
  
  return combineReducers({
    items,
    count,
    isLoading
  })
}