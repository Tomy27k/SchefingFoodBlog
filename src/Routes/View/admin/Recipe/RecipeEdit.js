import React,{useState,useEffect} from "react";
import {BsFillTrashFill} from 'react-icons/bs'
import { Link,useParams } from "react-router-dom";
import axios from "axios";

const RecipeEdit = () => {
  let { id } = useParams();
  const [isLoading,setIsLoading] = useState(false);
  const [datas,setDatas]=useState([])

const [recipe, setRecipe] = useState(
  {title: 'Apple turtle',
  content: 'loremdasjkdjkalsjdkl',
  active: 'checked',
  timer :'30 minutes',
  piece:'4 persons',
  service:'delicios',
  comments:[{
    author:'halil',
    content:'nasilsin bro',
    title:'cok kotu'
}]},
)
useEffect(() => {
  axios.get('http://localhost:3001/recipe/show')
  .then(res=>{
    setDatas(res.data.find((item)=>{
      return item._id === id
    }))
  })
  .then(()=>{
    setIsLoading(true)
  })
  .catch(err=>console.error(err))
  
},[]);


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
              <input type="text" defaultValue={datas.title}  className="form-control" id="Title" />
            </div>
            <div className="my-2">
              <label htmlFor="Content" className="form-label">
                Content
              </label>
              <textarea type="text" defaultValue={datas.content}  className="form-control" id="Content" >{datas.content}</textarea>
            </div>
            <div className="my-2">
              <input type="checkbox" defaultChecked={datas.active}  id="IsActive" className="me-3" />
              <label htmlFor="IsActive" className="form-label">
                Active ?
              </label>
            </div>
            
            <button type="submit" className="btn mt-4 btn-lg btn-outline-success">Edit</button>
          </form>
          
        </div>
        
      </div>
      <div className="recipe-comments  border-1">
            <ul className="d-flex flex-wrap flex-column gap-4 mt-4">
              
              {
                
                  recipe.comments.map((comments,i)=>(
                    <li>
                    <div className="card">
                      <div className="card-header d-flex justify-content-between">
                        <h5>{comments.title}</h5>
                        <Link className="btn btn-outline-danger"><BsFillTrashFill/></Link>
                      </div>
                      <div className="card-body">{comments.content}</div>
                      <div className="card-footer">{comments.author}</div>
                    </div>
                  </li>
                  ))
                  
                
              }
            </ul>
          </div>
    </section>
  );
};

export default RecipeEdit;
