import React from "react";
import { Link } from "react-router-dom";


const ShopProductItem = ({tags,image,title,price,content,id}) => {
  return (
    <div className="product-item d-flex bg-light align-items-center gap-2 border p-2 rounded-3 mb-3">
      <div className="product-image">
        <img src={image} alt="" width='150px' />
      </div>
      <div className="product-content ">
        <h2 className="title">{title}</h2>
        <p>{content}</p>
        
        <div className="d-flex justify-content-between align-items-end">
        <div className="product-tags">
          {
            tags.map((item,index)=>(
                <span className="px-2  text-white bg-danger rounded-pill mx-2" key={index}>{item}</span>
            ))
          }
        </div>
        <Link className="btn btn-warning" to={`/shop/product/${id}`}>Buy {price}</Link>
        </div>
      </div>
    </div>
  );
};

export default ShopProductItem;
