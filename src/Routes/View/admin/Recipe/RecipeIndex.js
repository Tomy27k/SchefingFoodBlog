import React,{useEffect,useState} from 'react'
import { Link,  } from 'react-router-dom'
import axios from 'axios'

const RecipesIndex = () => {
const [datas,setDatas]=useState([])
const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/recipe/show')
    .then(res=>{
      setDatas(res.data)
    })
    .then(()=>{
      setIsLoading(true)
    })
    .catch(err=>console.error(err))
    
  },[]);
  return (
    <section className='p-4 w-100  '>
       <div className="task-title mb-4 p-2 bg-dark text-white rounded rounded-3 d-flex justify-content-between  border">
          <div className="h3">Recipe View </div>
          <Link to='/admin/recipe-create' className='btn btn-outline-light'>Create</Link>
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
            
           {
            datas.map((item,index)=>(
              <tr>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.active}</td>
              <td>{item.created_at}</td>
              <td><Link to={`/admin/recipe-edit/${item._id}`} className='btn btn-warning'>Details...</Link></td>
            </tr>
            ))
           }
           {/* {
            JSON.stringify(datas)
           } */}
          </tbody>
       </table>
    </section>
  )
}

export default RecipesIndex