import React from 'react'
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import slide_img_1 from '../../../../assets/images/h4-img-24.jpg'

const Home = () => {
  return (
    <section className='home-slider'>

  
<Splide hasTrack={ false }>
  <SplideTrack>
    <SplideSlide >
      <div className='splide-item d-flex  align-items-center' style={{backgroundImage: `url(${slide_img_1})`}}>
        <div className="splide-content  ">
          <h2>title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem unde commodi perspiciatis amet delectus animi? Facilis, perspiciatis laborum accusamus deleniti rem pariatur aperiam asperiores officiis numquam, repudiandae debitis. Dolores?</p>
        </div>
      </div>
    </SplideSlide>
  
  </SplideTrack>
</Splide>
  

    </section>
  )
}

export default Home