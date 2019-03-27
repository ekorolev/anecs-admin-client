import {
  CHANGE_FILTER,
  ADD_ITEM
} from '../constants/ActionTypes.js'

export function changeFilter(value) {
  return {
    type: CHANGE_FILTER,
    value
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}