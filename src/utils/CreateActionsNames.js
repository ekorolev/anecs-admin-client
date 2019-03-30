import pluralize from 'pluralize'

const jsUCFirst = s => s.charAt(0).toUpperCase() + s.slice(1)

export default function (itemsNames) {
  itemsNames = itemsNames.toLowerCase()
  const singularForm = jsUCFirst(pluralize.isSingular(itemsNames)
    ? itemsNames
    : pluralize.singular(itemsNames))
  const pluralForm = jsUCFirst(pluralize.plural(singularForm))
  
  return {
    setItems: `set${pluralForm}`,
    addItem: `add${singularForm}`,
    setItemsCount: `set${pluralForm}Count`,
    decrementItemsCount: `decrement${pluralForm}Count`,
    incrementItemsCount: `increment${pluralForm}Count`,
    setItemsLoading: `set${pluralForm}Loading`,
    deleteItem: `delete${singularForm}`,
    updateItem: `update${singularForm}`,
    createItem: `create${singularForm}`,
    loadItems: `load${pluralForm}`,
    removeItem: `remove${singularForm}`,
    saveItem: `save${singularForm}`
  }
}