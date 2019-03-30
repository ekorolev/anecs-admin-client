import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PapersNav from '../layouts/PapersNav'

export default function () {
  return (
    <MainLayout sideNav={<PapersNav/>}>
      Papers page
    </MainLayout>
  )
}