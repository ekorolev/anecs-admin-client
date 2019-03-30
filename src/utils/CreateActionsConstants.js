export default itemsName => {
  const E = itemsName.toUpperCase()
  return {
    SET_ITEMS: `SET_ARRAY_OF_${E}`,
    DELETE_ITEM: `DELETE_ELEMENT_FROM_${E}`,
    UPDATE_ITEM: `UPDATE_ELEMENT_FROM_${E}`,
    ADD_ITEM: `ADD_ITEM_TO_${E}`,
    SET_ITEMS_AMOUNT: `SET_AMOUNT_OF_${E}`,
    INCREMENT_ITEMS_AMOUNT: `INCREMENT_AMOUNT_OF_${E}`,
    DECREMENT_ITEMS_AMOUNT: `DECREMENT_AMOUNT_OF_${E}`,
    SET_ITEMS_IS_LOADING: `SET_ARRAY_OF_${E}_IS_LOADING`
  }
}