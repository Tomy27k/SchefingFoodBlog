import React,{useState} from "react";
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const RecipeEdit = () => {
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
              <input type="text" defaultValue={recipe.title} className="form-control" id="Title" />
            </div>
            <div className="my-2">
              <label htmlFor="Content" className="form-label">
                Content
              </label>
              <input type="text" defaultValue={recipe.content}  className="form-control" id="Content" />
            </div>
            <div className="my-2">
              <input type="checkbox" defaultChecked={recipe.active}  id="IsActive" className="me-3" />
              <label htmlFor="IsActive" className="form-label">
                Active ?
              </label>
            </div>
            <div className="my-2">
              <label htmlFor="timer" className="form-label">
                Timer
              </label>
              <input type="text" defaultValue={recipe.timer}  className="form-control" id="timer" />
            </div>
            <div className="my-2">
              <label htmlFor="piece" className="form-label">
                Piece
              </label>
              <input type="text" defaultValue={recipe.piece}  className="form-control" id="piece" />
            </div>
            <div className="my-2">
              <label htmlFor="service" className="form-label">
                Service
              </label>
              <input type="text" defaultValue={recipe.service}  className="form-control" id="service" />
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
