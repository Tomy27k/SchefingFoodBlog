import React from 'react'
import {BsFillClockFill} from 'react-icons/bs'
import {BiLike} from 'react-icons/bi'

const Card = ({time,like,title,image}) => {
  return (
    <div className='product-card'>
        <div className="card--img" style={image}></div>
        <div className="card--body">
            <div className="sup--title mt-1 d-flex ">
                <div className="time  d-flex align-items-center">
                        <BsFillClockFill className='mx-1'/>
                        <span>{time}</span>
                </div>
                <div className="like mx-3 d-flex align-items-center">
                    <BiLike className='mx-1'/>
                    <span>
                        {like}
                    </span>
                </div>
            </div>
            <div className="title mt-3 p-1">
                <h4>{title}</h4>
            </div>
        </div>


    </div>
  )
}

export default Card