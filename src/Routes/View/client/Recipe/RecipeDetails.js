import React from 'react'
import {BiTime,BiLike} from 'react-icons/bi'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {ImTicket} from 'react-icons/im'
const RecipeDetails = ({title,time,delicios,piece,img_src,menu,content,ingredients}) => {
  return (
    <article className='recipe-details-page'>
        <div className="container">
            <div className="col-8">
                <h1>title</h1>
                <img src="" alt="" />
                <div className='recipe-description d-flex'>
                    <div className="time">      
                    <BiTime/> 
                    <time>{time}</time>   
                    </div>
                    <div className="delicios">
                        <BiLike/>
                       
                        <span>{delicios}</span>
                    </div>
                    <div className="piece">
                        <GiForkKnifeSpoon/>
                        <span>{piece}</span>

                    </div>
                    <div className="menu">
                        <ImTicket/>  
                        <span>{menu}</span>
                    </div>
                </div>
                <p>{content}</p>
                <div className="ingredients">
                    <h6>Adjust Servings {piece}</h6>
                    <ul className='items'>
                        <li><p>2 pisces</p></li>
                    </ul>
                    
                </div>

                
            </div>
            <div className="col-4">

            </div>
        </div>





    </article>
  )
}

export default RecipeDetails