import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';



const ShopProductCreate = () => {
  
    
    const [postData,setPostData]=useState({});
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
     console.log(data);
      axios.post('http://localhost:3001/shop/product/create',data)
      .then(res=>console.log(res))
      .catch(err=>console.log(err));



    };
  return (
    <section className='p-4 w-100'>

<div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 border">
          <div className="h3">Product Create </div>
       </div>
      <div className="card ">
        <div className="card-body  ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-50">
            <div className="my-2">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input type="text" {...register("product_title")}  className="form-control" id="Title" />
            </div>
            <div className="my-2">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input type="text"  {...register("product_category")}  className="form-control" id="category" />
            </div>
            <div className="my-2">
              <label htmlFor="Content" className="form-label">
                Content
              </label>
              <input type="text"  {...register("product_content")}  className="form-control" id="Content" />
            </div>
            <div className="my-2">
              <input type="checkbox" {...register("active")} id="IsActive" className="me-3" />
              <label htmlFor="IsActive" className="form-label">
                Active ?
              </label>
            </div>
            <div className="my-2">
              <label htmlFor="price"  className="form-label">
                Price
              </label>
              <input type="number" {...register("product_price")} placeholder='Only Number'  className="form-control" id="price" />
            </div>
            <div className="my-2">
              <label htmlFor="discount"  className="form-label">
                Discount
              </label>
              <input type="number" {...register("product_discount")} placeholder='Only Number'  className="form-control" id="discount" />
            </div>
            <div className="my-2">
              <label htmlFor="piece" className="form-label">
                Piece
              </label>
              <input type="number" {...register("product_stock_piece")} pattern="[0-9]*"  placeholder='Only Number' className="form-control" id="piece" />
            </div>
            <div className="my-2">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input type="file" {...register("product_image")}    className="form-control" id="image" />
            </div>
            
            <input type="submit" value='Create'  className="btn mt-4 btn-lg btn-outline-success"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ShopProductCreate