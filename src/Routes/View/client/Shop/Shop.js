import React from "react";
import { Link } from "react-router-dom";
import ShopProductItem from "./ShopProductItem";
import image1 from '../../../../assets/images/worldfoof.png'
import image2 from '../../../../assets/images/h4-img-24.jpg'
const Shop = () => {
  

  return (
    <section className="shop-page">
      <div className="container ">
        <div className="row">
        <aside className="col-3  rounded rounded-3">
          <h5 className="p-3 text-dark rounded-top">Product Categories</h5>
          <ul className="categories-lists ">
            <li><Link className="btn btn-outline-dark mb-2">Beef</Link></li>
            <li><Link className="btn btn-outline-dark mb-2">Meet</Link></li>
            <li><Link className="btn btn-outline-dark mb-2">Chicken</Link></li>
            <li><Link className="btn btn-outline-dark mb-2">Salad</Link></li>
            <li><Link className="btn btn-outline-dark mb-2">Beef</Link></li>
            <li><Link className="btn btn-outline-dark mb-2">Beef</Link></li>
          </ul>
        </aside>
        <div className="products col-9">
        <h1 className="border-bottom pb-2 border-2">Shop</h1>
        <div className="product-filter d-flex justify-content-between my-4">
          <p className="m-0">Showing 1-15 of 26 results</p>
          <select name="" id="" className="filter-select text-bg-dark  btn btn-outline-light ">
            <option value="">Sort by average popularity</option>
            <option value="">Sort by average rating</option>
            <option value="">Sort by average sales</option>
            <option value="">Sort by average latest</option>
          </select>
        </div>
        <div className="product-items mt-4">
          <ShopProductItem
            tags={['french','swiss','mallorca']}
            title='beef'
            content='lorem lorem lorem ipsum dolor sit amet, consectetur adip upadasdkjasdhfglkdsnvnljfgljds;fmldsjfldksfmdslfjamlsfj'
            piece='5'
            price='13$ / kg'
            id="1"
            image={image1}
          />
          <ShopProductItem
            tags={['french','swiss','mallorca']}
            title='beef'
            content='lorem lorem lore upadasdkjasdhfglkdsnvnljfgljds;fmldsjfldksfmdslfjamlsfj'
            piece='5'
            price='13$ / kg'
            id="2"
            image={image2}
          
          />
          <ShopProductItem
            tags={['french','swiss','mallorca']}
            title='beef'
            content='lorem lorem lore upadasdkjasdhfglkdsnvnljfgljds;fmldsjfldksfmdslfjamlsfj'
            piece='5'
            price='13$ / kg'
            id='3'
            image={image1}
          />
        </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
