import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
const Footer = () => {

  return (
    <footer className='bg-dark text-light'>
      <div className="footer-top d-flex justify-content-between p-4">
        <ul className='contact-information  d-flex flex-column p-0 justify-content-center'>
          <li className='my-1'><Link className='text-white btn btn-outline-warning' to='/recipe'>Recipe Page </Link></li>
          <li className='my-1'><Link className='text-white btn btn-outline-warning' to='/forum'>Forum Page</Link></li>
          <li className='my-1'><Link className='text-white btn btn-outline-warning' to='/shop'>Shop Page</Link></li>
          <li className='my-1'><Link className='text-white btn btn-outline-warning' to='/contact'>Contact</Link></li>
          
        </ul>
        <div className="map position-relative" id='map'>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 
</MapContainer>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='text-center m-0 p-0'>Schefing 2022 CopyRight</p>
      </div>

    </footer>
  )
}

export default Footer