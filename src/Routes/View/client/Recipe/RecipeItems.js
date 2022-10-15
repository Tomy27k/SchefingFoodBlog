import React, { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";

const RecipeItems = ({ title, date, tag, content, img_src, button }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(tag);
  }, [tag]);

  return (
    <div className="row mt-4 shadow my-4 py-2 ">
      <div className="col-4">
        <img src={img_src} alt="" width="100%" />
      </div>
      <div className="col-8 d-flex justify-content-between flex-column">
        <h2>{title}</h2>
        <div className="tags d-flex">
          {tags.map((item, i) => {
            return (
              <span
                key={i}
                className="me-1 py-0 px-2 bg-dark text-white rounded-pill"
              >
                {item}
              </span>
            );
          })}
        </div>
        <p className="w-100">{content}</p>
        <Link className="btn recipe-details btn-warning">Details</Link>
      </div>
    </div>
  );
};

export default RecipeItems;
