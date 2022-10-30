import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import {BsFillTrashFill} from 'react-icons/bs'

const ForumEdit = () => {
    const forum={
        title:"Title",
        active:false,

    }
  return (
    <section className="p-4 admin-panel ">
    <div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 border">
      <div className="h3">Recipe Edit </div>
    </div>
    <div className="card ">
      <div className="card-body  ">
        <form action="" className="w-50">
          <div className="my-2">
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <input type="text" defaultValue={forum.title} className="form-control" id="Title" />
          </div>
          <div className="my-2">
            <label htmlFor="Content" className="form-label">
              Content
            </label>
            <input type="text" defaultValue={forum.content}  className="form-control" id="Content" />
          </div>
          <div className="my-2">
            <input type="checkbox" defaultChecked={forum.active}  id="IsActive" className="me-3" />
            <label htmlFor="IsActive" className="form-label">
              Active ?
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="timer" className="form-label">
              Timer
            </label>
            <input type="text" defaultValue={forum.timer}  className="form-control" id="timer" />
          </div>
          <div className="my-2">
            <label htmlFor="piece" className="form-label">
              Piece
            </label>
            <input type="text" defaultValue={forum.piece}  className="form-control" id="piece" />
          </div>
          <div className="my-2">
            <label htmlFor="service" className="form-label">
              Service
            </label>
            <input type="text" defaultValue={forum.service}  className="form-control" id="service" />
          </div>
          <button type="submit" className="btn mt-4 btn-lg btn-outline-success">Edit</button>
        </form>
        
      </div>
      
    </div>
  </section>
  )
}

export default ForumEdit