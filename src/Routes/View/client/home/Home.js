import React from "react";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import slide_img_1 from "../../../../assets/images/h4-img-24.jpg";
import Card from "../../../../components/Product-Card/Card";
import image from "../../../../assets/images/h4-img-1.jpg";
import video  from '../../../../assets/images/h4-img-5.jpg'
import {BsFillClockFill,BsFillTagFill,BsFillPlayCircleFill} from 'react-icons/bs'

const Home = () => {
  return (
    <>
      <section className="home-slider">
        <Splide hasTrack={false}>
          <SplideTrack>
            <SplideSlide>
              <div
                className="splide-item d-flex  align-items-center"
                style={{ backgroundImage: `url(${slide_img_1})` }}
              >
                <div className="splide-content  ">
                  <h2>title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita dolorem unde commodi perspiciatis amet delectus
                    animi? Facilis, perspiciatis laborum accusamus deleniti rem
                    pariatur aperiam asperiores officiis numquam, repudiandae
                    debitis. Dolores?
                  </p>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </section>
      <section className="py-4">
        <div className="container d-flex gap-4">
          <Card
            title="Tasty croissant and tea for perfect breakfast "
            time="60 minutes"
            like="medium"
            image={{ backgroundImage: `url(${image})` }}
          />
          <Card
            title="Tasty croissant and tea for perfect breakfast "
            time="60 minutes"
            like="medium"
            image={{ backgroundImage: `url(${image})` }}
          />
          <Card
            title="Tasty croissant and tea for perfect breakfast "
            time="60 minutes"
            like="medium"
            image={{ backgroundImage: `url(${image})` }}
          />
          <Card
            title="Tasty croissant and tea for perfect breakfast "
            time="60 minutes"
            like="medium"
            image={{ backgroundImage: `url(${image})` }}
          />
        </div>
      </section>
      <section className="blog-video d-flex  align-items-center">
        <div className="product-md-card   overflow-hidden container d-flex">
          <div className="video d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${video})`}}>
            <BsFillPlayCircleFill style={{width: '200px !imported' ,height : '200px !imported' }}/>
          </div>
          <div className="content bg-light p-3 rounded mx-2 d-flex flex-column justify-content-center">
            <div className="sup-title d-flex">
              <div className="time d-flex align-items-center">
              <BsFillClockFill />
              <span className="mx-1">60 minutes</span>
              </div>
              <div className="tags d-flex align-items-center mx-3"><BsFillTagFill/>
              <span className="mx-1 rounded rounded-pill bg-warning px-2">Waffles</span>
              <span className="mx-1 rounded rounded-pill bg-danger text-white px-2">Bread</span>
              <span className="mx-1 rounded rounded-pill bg-secondary text-white px-2">meat</span>
              </div>
            </div>
            <div className="card--body">
              <h1>Perfect homemade waffles</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                quam sequi consequuntur ipsam quo. Magni asperiores debitis
                impedit natus totam, molestiae quae repellendus, in, quo
                recusandae nihil eum voluptatem esse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
