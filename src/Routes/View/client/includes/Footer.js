import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
const Footer = () => {
const tel='tel:+432423423'
  return (
    <footer className='bg-dark text-light '>
      <div className="footer-top d-flex flex-wrap justify-content-between p-4">
        <ul className='contact-information  d-flex flex-column p-0 justify-content-center'>
          <li className='mt-1'><p className='m-0 h3 text-bg-light rounded p-1'>Schefing Corporation</p></li>
          <li className='mt-1'><p className='m-0'>Los Angeles | California</p></li>
          <li className='mt-1'><p className='m-0'><a href={tel} className='text-warning'>+1 (756) 43 43</a></p></li>
          <li className='mt-1'><p className='m-0'></p></li>
          
          
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