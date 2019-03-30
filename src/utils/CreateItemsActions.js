
import createActionsConstants from './CreateActionsConstants'
import createActionsNames from './CreateActionsNames';

export default function (itemsName, api) {
  const Constants = createActionsConstants(itemsName)
  const Actions = createActionsNames(itemsName)

  const setItems = items => ({
    type: Constants.SET_ITEMS,
    payload: items
  })
  
  const addItem = item => ({
    type: Constants.ADD_ITEM,
    payload: item
  })

  const setItemsLoading = (b) => ({
    type: Constants.SET_ITEMS_IS_LOADING,
    payload: b
  })

  const updateItem = (id, update) => ({
    type: Constants.UPDATE_ITEM,
    payload: {
      id,
      update
    }
  })

  const deleteItem = id => ({
    type: Constants.DELETE_ITEM,
    payload: id
  })

  return {
    [Actions.setItems]: setItems,
    [Actions.addItem]: addItem,
    [Actions.setItemsLoading]: setItemsLoading,
    [Actions.updateItem]: updateItem,
    [Actions.deleteItem]: deleteItem,

    [Actions.createItem]: data => async dispatch => {
      const res = await api.createItem(data)
      dispatch(addItem(res))
    },

    [Actions.loadItems]: () => async dispatch => {
      dispatch(setItemsLoading(true))
      const res = await api.getItems()
      localStorage.setItem(itemsName, JSON.stringify({ items: res.items }))
      dispatch(setItems(res.items))
      dispatch(setItemsLoading(false))
    },

    [Actions.removeItem]: id => async dispatch => {
      dispatch(updateItem(id, { isLoading: true }))
      await api.deleteItem(id)
      dispatch(updateItem(id, { isLoading: false }))
      dispatch(deleteItem(id))
    },

    [Actions.saveItem]: (id, update) => async dispatch => {
      dispatch(updateItem(id, { isLoading: true }))
      await api.saveItem(id, update)
      dispatch(updateItem(id, update))
      dispatch(updateItem(id, { isLoading: false }))      
    }
  }
}