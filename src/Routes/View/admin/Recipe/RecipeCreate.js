import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate,Redirect  } from 'react-router-dom';
import { GiConsoleController } from 'react-icons/gi';
import { Editor } from 'react-draft-wysiwyg';
import ControlledEditor from '../../../../components/RichText/RichTextEditor'

const RecipeCreate = () => {
  const [postData,setPostData]=useState({});
  const { register, handleSubmit} = useForm();
 
  const navigate=useNavigate();
  // const navigation = useNavigation();
 
  const onSubmit = data => {
    console.log(data)
    axios({
      method:'post',
      url:'http://localhost:3001/recipe/create',
      data: data,
  
    }).then((response) =>navigate('/admin/recipes'))
    .catch((err)=> console.error(err))
    .finally(()=>{
    })
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
              <textarea type="text"  {...register("content")}  className="form-control" id="Content" ></textarea>
            </div>
            <div className="my-2">
              <input type="checkbox" {...register("active")} id="IsActive" className="me-3" />
              <label htmlFor="IsActive" className="form-label">
                Active ?
              </label>
            </div>
            <Editor
            style={{width: '300px;',height:'400px'}}
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
  
/>
            
            
            <input type="submit" value='Create'  className="btn mt-4 btn-lg btn-outline-success"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RecipeCreate