import {
  SET_ANECDOTES,
  SET_PAGE,
  PAGE_IS_LOADED,
  PAGE_IS_LOADING,
  SET_ANECDOTES_COUNT
} from '../constants/ActionTypes'

export const setAnecdotes = anecdotes => ({
  type: SET_ANECDOTES,
  payload: anecdotes
})

export const setPageIsLoaded = isLoaded => ({
  type: PAGE_IS_LOADED,
  payload: isLoaded
})

export const setPageIsLoading = isLoading => ({
  type: PAGE_IS_LOADING,
  payload: isLoading
})

export const setPageNumber = number => ({
  type: SET_PAGE,
  payload: number
})

export const setAnecdotesCount = count => ({
  type: SET_ANECDOTES_COUNT,
  payload: count
})