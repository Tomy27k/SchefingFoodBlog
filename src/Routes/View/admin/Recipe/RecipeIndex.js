import React from 'react'
import { Link } from 'react-router-dom'

const RecipesIndex = () => {
  return (
    <section className='p-4 w-100  '>
       <div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 border">
          <div className="h3">Recipe View </div>
       </div>

       <table className='table table-hover my-4 border-2 table-striped  border'>

          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Active</th>
              <th>Created At</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title1</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>True</td>
              <td>02.02.1992</td>
              <td><Link to="/admin/recipe-edit/1" className='btn btn-warning'>Details...</Link></td>
            </tr>
            <tr>
              <td>Title2</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>False</td>
              <td>02.02.1982</td>
              <td><Link to="/admin/recipe-edit/1" className='btn btn-warning'>Details...</Link></td>
            </tr>
          </tbody>
       </table>
    </section>
  )
}

export default RecipesIndex