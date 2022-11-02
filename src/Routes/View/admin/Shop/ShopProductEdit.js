import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShopProductEdit = () => {
  const [editData,setEditData]=useState({});
  
    const { register, handleSubmit} = useForm();
    let {editId}= useParams();
    const onSubmit = data => {
    }
    const [shopData,setShopData]= useState([]);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
      axios.get('http://localhost:3001/shop/show')
      .then(res=>{
        setEditData(res.data.find((item)=>{
          return item._id === editId
        }))
      })
      .catch(err=>console.error(err))
      .finally(()=>{
        setIsLoading(true)
      })
    },[]);
    
     if(isLoading === false){
      return <h1>Loading</h1>
     }
     
  return (
    <section className='p-4 w-100'>
<div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 border">
          <div className=" d-flex justify-content-between">
              <h3>Shop Edit</h3>
              <h3>{editData.created_at}</h3>
           </div>
       </div>
      <div className="card ">
        <div className="card-body  ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-50">
          
          <div className="my-2">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input type="text" {...register("product_title")} defaultValue={editData.product_title}  className="form-control" id="Title" />
            </div>
            <div className="my-2">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input type="text"  {...register("product_category")} defaultValue={editData.product_category}  className="form-control" id="category" />
            </div>
            <div className="my-2">
              <label htmlFor="Content" className="form-label">
                Content
              </label>
              <input type="text"  {...register("product_content")} defaultValue={editData.product_content}   className="form-control" id="Content" />
            </div>
            <div className="my-2">
              <input type="checkbox" {...register("active")} id="IsActive" defaultValue={editData.product_active}  className="me-3" />
              <label htmlFor="IsActive" className="form-label">
                Active ?
              </label>
            </div>
            <div className="my-2">
              <label htmlFor="price"  className="form-label">
                Price
              </label>
              <input type="number" {...register("product_price")} defaultValue={editData.product_price}  placeholder='Only Number'  className="form-control" id="price" />
            </div>
            <div className="my-2">
              <label htmlFor="discount"  className="form-label">
                Discount
              </label>
              <input type="number" {...register("product_discount")} defaultValue={editData.product_discount}  placeholder='Only Number'  className="form-control" id="discount" />
            </div>
            <div className="my-2">
              <label htmlFor="piece" className="form-label">
                Piece
              </label>
              <input type="number" {...register("product_stock_piece")} defaultValue={editData.product_stock_piece}  pattern="[0-9]*"  placeholder='Only Number' className="form-control" id="piece" />
            </div>
            <input type="submit" value='Create'  className="btn mt-4 btn-lg btn-outline-success"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ShopProductEdit