import React,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom';
import bgforum from "../../../../assets/images/worldfoof.png";
import RecipeItems from './RecipeItems';


const Recipe = () => {
 
  return (
    <>
        <section
        className="forum-search"
        style={{ backgroundImage: `url(${bgforum})` }}
      >
        <div className="search-bar container d-flex justify-content-center align-items-center">
          <form
            action=""
            className="d-flex align-items-center p-3 bg-dark rounded rounded-pill"
          >
            <div className="countries mx-3">
              <input
                type="text"
                placeholder="Recipes"
                className="form-control"
              />
                </div>
            <button type="submmit" className="btn btn-outline-success mx-3">
              Search
            </button>
          </form>
        </div>
      </section>
      
      
    </>
  )
}

export default Recipe