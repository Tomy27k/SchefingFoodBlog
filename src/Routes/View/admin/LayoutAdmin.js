import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './includes/Header'
import AsideBar from './includes/AsideBar'
const LayoutAdmin = () => {
  return (
    <>
    <Header/>
    <main className=' admin-main d-flex'>
    <AsideBar/>
        <Outlet/>
    </main>

    </>
  )
}

export default LayoutAdmin