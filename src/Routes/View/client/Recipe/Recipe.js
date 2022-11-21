import React,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom';
import bgforum from "../../../../assets/images/worldfoof.png";
import RecipeItems from './RecipeItems';


const Recipe = () => {
  const [searchClass,setSearchClass ]= useState('recipe-content-show d-none bg-light')
  const [data,setData]=useState([
    {
    title:'recipe1',
    content:'reccipe content ne yazarsam o'
  },
    {title:'recipe2',
    content:'asdasdasd coadsasdentasde asydasdas o'
  },
]);
const [inputData,setInputData]=useState([])

const handleChange=(event)=>{
  
const input = data.filter((item)=>{
  return item.title.includes(event.target.value)
})
setInputData(input)
if(event.target.value !== ''){
  setSearchClass('recipe-content-show bg-light d-block')
}else{
  setSearchClass('recipe-content-show d-none')
}
if(input.length == 0){
  setSearchClass('recipe-content-show d-none')
}
}
const classe =()=>{
  setSearchClass('recipe-content-show d-none bg-light')
}
  return (
    <>
    <section className='recipe-home d-flex justify-content-center align-items-center' style={{backgroundImage:`url(${bgforum})`}}>
      <div  className="recipe-search-bar position-relative border-4 hover border border-danger d-flex gap-4 p-3 bg-light rounded-pill">
          <input className='form-control' placeholder='Recipe name enter' type="text"   onChange={handleChange} />
          <Link to='/recipe/products' className='btn btn-danger '>Recipe All Show</Link>
          <div className={searchClass} onMouseLeave={()=>setSearchClass('recipe-content-show d-none bg-light')} >
          <ul className='px-4 m-0 d-flex flex-column'>
              { inputData!==''  &&
                inputData.map((item,index)=>(
                  <li className='p-2 border shadow btn border-1 mx-4 my-2' key={index}><Link to={item.content}>{item.title}</Link></li>
                ))
              }
              </ul>
          </div>
      </div>
    </section>
      
      
    </>
  )
}

export default Recipe