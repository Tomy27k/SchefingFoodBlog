import React from 'react'
import {BiTime,BiLike} from 'react-icons/bi'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {ImTicket} from 'react-icons/im'
import image from '../../../../assets/images/h4-img-24.jpg'
const RecipeDetails = ({title,time,delicios,piece,img_src,menu,content,ingredients}) => {
  return (
    <article className='recipe-details-page'>
        <div className="container gap-2">
       <div className="row">
       <div className="col-lg-8 ">
        <img src={image} alt="{title}" width='100%' />
            <h1>{title}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, beatae?
            </h1>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci velit minima alias vel cum ad perferendis laboriosam, quisquam itaque natus, amet optio. Ab aperiam, voluptatibus impedit dolor incidunt veniam nam sunt rerum a. Fugit repellendus, sapiente eius explicabo officia, ipsa expedita dicta nobis illo impedit quis nemo sequi dolorum! Voluptatem?
            </div>
        </div>
        <div className="col-lg-4 ">
            <div className="other-recipe">
                <ul>
                  <li>
                      <div className="other-recipe-item">
                          <img src="" alt="" />
                          <div className="other-content">
                            <h3 className='h4'>other title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, numquam.</p>
                          </div>
                      </div>
                  </li>
                 
                </ul>
            </div>
        </div>
       </div>
            
             
        </div>
    </article>
  )
}

export default RecipeDetails