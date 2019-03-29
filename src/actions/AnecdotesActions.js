import {
  SET_ANECDOTES,
  SET_ANECDOTES_COUNT,
  SET_ANECDOTES_LOADING
} from '../constants/ActionTypes'
import { getAnecdotes } from '../api'

export const setAnecdotes = anecdotes => ({
  type: SET_ANECDOTES,
  payload: anecdotes
})

export const setAnecdotesCount = count => ({
  type: SET_ANECDOTES_COUNT,
  payload: count
})

export const setAnecdotesLoading = value => ({
  type: SET_ANECDOTES_LOADING,
  payload: value
})

export const loadAnecdotes = () => async dispatch => {
  dispatch(setAnecdotesLoading(true))
  const res = await getAnecdotes()
  localStorage.setItem('anecdotes', JSON.stringify(res))
  dispatch(setAnecdotes(res.anecdotes))
  dispatch(setAnecdotesCount(res.count))
  dispatch(setAnecdotesLoading(false))
}