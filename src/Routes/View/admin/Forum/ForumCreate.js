import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const ForumCreate = () => {
    
        const [postData,setPostData]=useState({});
        const { register, handleSubmit} = useForm();
        const onSubmit = data => {
         
         
          axios({
            method:'post',
            url:'http://localhost:3001/recipes/recipe-create',
            data: data,
        
          }).then((response) => console.log(response))
          .catch((err)=> console.error(err))
        };
      
  return (
    <section className='p-4 w-100'>

<div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 border">
          <div className="h3">Recipe Create </div>
       </div>
      <div className="card ">
        <div className="card-body  ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-50">
            <div className="my-2">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input type="text" {...register("title")}  className="form-control" id="Title" />
            </div>
            <div className="my-2">
              <label htmlFor="Content" className="form-label">
                Content
              </label>
              <input type="text"  {...register("content")}  className="form-control" id="Content" />
            </div>
            <div className="my-2">
              <input type="checkbox" {...register("active")} id="IsActive" className="me-3" />
              <label htmlFor="IsActive" className="form-label">
                Active ?
              </label>
            </div>
            <div className="my-2">
              <label htmlFor="timer"  className="form-label">
                Timer
              </label>
              <input type="number" {...register("timer")} placeholder='Only Number'  className="form-control" id="timer" />
            </div>
            <div className="my-2">
              <label htmlFor="piece" className="form-label">
                Piece
              </label>
              <input type="number" {...register("piece")} pattern="[0-9]*"  placeholder='Only Number' className="form-control" id="piece" />
            </div>
            <div className="my-2">
              <label htmlFor="service" className="form-label">
                Service
              </label>
              <input type="text" {...register("service")}  className="form-control" id="service" />
            </div>
            <input type="submit" value='Create'  className="btn mt-4 btn-lg btn-outline-success"/>
          </form>
        </div>
      </div>
    </section>
  )}


export default ForumCreate