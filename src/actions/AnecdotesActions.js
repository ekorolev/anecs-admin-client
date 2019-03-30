import {
  SET_ANECDOTES,
  SET_ANECDOTES_COUNT,
  SET_ANECDOTES_LOADING,
  SET_ANECDOTE_LOADING,
  DELETE_ANECDOTE,
  DECREMENT_ANECDOTES_COUNT,
  UPDATE_ANECDOTE
} from '../constants/ActionTypes'
import {
  getAnecdotes,
  deleteAnecdote as deleteAnecdoteApi,
  saveAnecdote as saveAnecdoteApi
} from '../api'

export const setAnecdotes = anecdotes => ({
  type: SET_ANECDOTES,
  payload: anecdotes
})

export const setAnecdotesCount = count => ({
  type: SET_ANECDOTES_COUNT,
  payload: count
})

export const decrementCount = () => ({
  type: DECREMENT_ANECDOTES_COUNT
})

export const setAnecdotesLoading = value => ({
  type: SET_ANECDOTES_LOADING,
  payload: value
})

export const deleteAnecdote = id => ({
  type: DELETE_ANECDOTE,
  payload: id
})

export const setAnecdoteLoading = (id, value) => ({
  type: SET_ANECDOTE_LOADING,
  payload: {
    id,
    isLoading: value
  }
})

export const updateAnecdote = (id, update) => ({
  type: UPDATE_ANECDOTE,
  payload: {
    id,
    update
  }
})

export const loadAnecdotes = () => async dispatch => {
  dispatch(setAnecdotesLoading(true))
  const res = await getAnecdotes()
  localStorage.setItem('anecdotes', JSON.stringify(res))
  dispatch(setAnecdotes(res.anecdotes))
  dispatch(setAnecdotesCount(res.count))
  dispatch(setAnecdotesLoading(false))
}

export const removeAnecdote = id => async dispatch => {
  dispatch(setAnecdoteLoading(id, true))
  await deleteAnecdoteApi(id)
  dispatch(setAnecdoteLoading(id, false))
  dispatch(deleteAnecdote(id))
  dispatch(decrementCount())
}

export const saveAnecdote = (id, update) => async dispatch => {
  dispatch(setAnecdoteLoading(id, true))
  await saveAnecdoteApi(id, update)
  dispatch(updateAnecdote(id, update))
  dispatch(setAnecdoteLoading(id, false))
}