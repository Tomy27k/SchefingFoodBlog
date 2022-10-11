import React from "react";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <section className="shop-page">
      <div className="container ">
        <div className="row">
        <aside className="col-3">
          <h3 className="p-3 bg-dark text-white rounded-top">Product Categories</h3>
          <ul className="categories-lists ">
            <li><Link className="text-dark">Beef</Link></li>
          </ul>
        </aside>
        <div className="products col-9">
        <h1 className="border-bottom pb-2 border-2">Shop</h1>
        <div className="product-filter d-flex justify-content-between my-4">
          <p className="m-0">Showing 1-15 of 26 results</p>
          <select name="" id="" className="filter-select">
            <option value="">Sort by average popularity</option>
            <option value="">Sort by average rating</option>
            <option value="">Sort by average sales</option>
            <option value="">Sort by average latest</option>
          </select>
        </div>
        <div className="product-items mt-4">
          <div className="product-item">
            <div className="product-image"></div>
            <div className="product-content">
              <div className="product-tags">
                <span>France</span>
                <span>Fresh</span>
                <span>Lamb</span>
              </div>
              <h4 className="title">Organic Rack of Lamb</h4>
              <p className="price">€14,90 / kg</p>
            </div>
          </div>
        </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
