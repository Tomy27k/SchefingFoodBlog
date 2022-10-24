import React from 'react'
import { Link } from 'react-router-dom'

const AsideBar = () => {
  return (
    <aside className='admin-aside d-flex flex-column align-items-center'>
      <h2 className='my-2'>Admin</h2>
      <ul className='w-100 m0-0 px-4 d-flex flex-column'>
        <li><Link to="/admin/" className='btn btn-outline-dark w-100 my-2'>Home</Link></li>
        <li><Link to="/admin/recipes" className='btn btn-outline-dark w-100 my-2'>Recipe</Link></li>
        <li><Link to="/admin/forum" className='btn btn-outline-dark w-100 my-2'>Forum</Link></li>
        <li><Link to="/admin/shop" className='btn btn-outline-dark w-100 my-2'>Shop</Link></li>
        <li><Link to="/admin/about" className='btn btn-outline-dark w-100 my-2'>about</Link></li>
        <li><Link to="/admin/user" className='btn btn-outline-dark w-100 my-2'>user</Link></li>
      </ul>
    </aside>
  )
}

export default AsideBar