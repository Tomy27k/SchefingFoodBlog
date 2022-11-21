import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShopIndex = () => {
  const [shopData,setShopData]= useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:3001/shop/show')
    .then(res=>{
      
      setShopData(res.data)
    })
    .then(()=>{
      setIsLoading(true);
    })
    .catch(err=>console.error(err))
    
  },[]);

  if(isLoading === false){
   return <h1>Loading...</h1>
  }
  return (
    <section className='p-4 w-100  '>
       <div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 d-flex justify-content-between  border">
          <div className="h3">Shop View </div>
          <Link to='/admin/shop/product-create' className='btn btn-outline-light'>Create</Link>
       </div>
       <table className='table table-hover my-4 border-2 table-striped  border'>

          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Piece</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {isLoading   &&
              shopData.map((item,index)=>(
               <tr>
                <td>{item.product_title}</td>
                <td>{item.product_category}</td>
                <td>{item.product_price}</td>
                <td>{item.product_stock_piece}</td>
                <td><Link to={`/admin/shop/product-edit/${item._id}`} className='btn btn-warning'>Details...</Link></td>
               </tr>
              ))
            }
          </tbody>
       </table>
    </section>
  )
}

export default ShopIndex