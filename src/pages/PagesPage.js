import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PagesNav from '../layouts/PagesNav'

export default function () {
  return (
    <MainLayout sideNav={<PagesNav/>}>
      Pages page
    </MainLayout>
  )
}