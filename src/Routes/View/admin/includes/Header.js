import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='admin-header d-flex bg-secondary align-items-center justify-content-between shadow'>
        <h1 className="logo mx-4 text-warning"><i>Schefing</i></h1>
            <ul className='m-0 d-flex'>
                <li><Link className='btn btn-dark'>Notifications</Link></li>
                <li><Link className='btn btn-dark mx-2'>Message</Link></li>
                <li><Link className='btn btn-dark mx-2'>Analitics</Link></li>
            </ul>
    </div>
  )
}

export default Header