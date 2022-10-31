import React from 'react'
import { Link } from 'react-router-dom'

const ShopIndex = () => {
  return (
    <section className='p-4 w-100  '>
       <div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 d-flex justify-content-between  border">
          <div className="h3">Shop View </div>;
          <Link to='/admin/shop/product-create' className='btn btn-outline-light'>Create</Link>
       </div>

       <table className='table table-hover my-4 border-2 table-striped  border'>

          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Created At</th>
              <th>Stock Piece</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title1</td>
              <td>Tatli</td>
              <td>5$</td>
              <td>02.02.1992</td>
              <td>34</td>
              <td><Link to="/admin/forum-edit/1" className='btn btn-warning'>Details...</Link></td>
            </tr>
            <tr>
              <td>Title2</td>           
              <td>Lorem ipsum dolor sit amet.</td>
              <td>False</td>
              <td>02.02.1982</td>
              <td><Link to="/admin/forum-edit/1" className='btn btn-warning'>Details...</Link></td>
            </tr>
          </tbody>
       </table>
    </section>
  )
}

export default ShopIndex