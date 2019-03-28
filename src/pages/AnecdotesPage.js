import React from 'react'
import MainLayout from '../layouts/MainLayout'
import AnecdotesNav from '../layouts/AnecdotesNav'

export default function () {
  return (
    <MainLayout sideNav={AnecdotesNav}>
      Anecdotes page
    </MainLayout>
  )
}