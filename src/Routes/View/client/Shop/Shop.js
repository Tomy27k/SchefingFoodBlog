import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShopProductItem from "./ShopProductItem";
import image1 from "../../../../assets/images/worldfoof.png";
import image2 from "../../../../assets/images/h4-img-24.jpg";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/shop/show")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }, []);

  return (
    <section className="shop-page">
      {JSON.stringify(products)}
      <div className="container ">
        <div className="row">
          <aside className="col-3  rounded rounded-3">
            <h5 className="p-3 text-dark rounded-top">Product Categories</h5>
            <ul className="categories-lists ">
              <li>
                <Link className="btn btn-outline-dark mb-2">Beef</Link>
              </li>
              <li>
                <Link className="btn btn-outline-dark mb-2">Meet</Link>
              </li>
              <li>
                <Link className="btn btn-outline-dark mb-2">Chicken</Link>
              </li>
              <li>
                <Link className="btn btn-outline-dark mb-2">Salad</Link>
              </li>
              <li>
                <Link className="btn btn-outline-dark mb-2">Beef</Link>
              </li>
              <li>
                <Link className="btn btn-outline-dark mb-2">Beef</Link>
              </li>
            </ul>
          </aside>
          <div className="products col-9">
            <h1 className="border-bottom pb-2 border-2">Shop</h1>
            <div className="product-filter d-flex justify-content-between my-4">
              <p className="m-0">Showing 1-15 of 26 results</p>
              <select
                name=""
                id=""
                className="filter-select text-bg-dark  btn btn-outline-light "
              >
                <option value="">Sort by average popularity</option>
                <option value="">Sort by average rating</option>
                <option value="">Sort by average sales</option>
                <option value="">Sort by average latest</option>
                <option value="">Sort by average latest</option>
              </select>
            </div>
            <div className="product-items mt-4">
              
              {products.map((item, index) => (
                <div className="product-item d-flex bg-light align-items-center gap-2 border p-2 rounded-3 mb-3">
                  <div className="product-image">
                    <img src={image1} alt="" width="150px" />
                  </div>
                  <div className="product-content ">
                    <h2 className="title">{item.product_title}</h2>
                    <p>{item.product_content}</p>

                    <div className="d-flex justify-content-between align-items-end">
                      <div className="product-tags">
                        {/* {tags.map((item, index) => (
                          <span
                            className="px-2  text-white bg-danger rounded-pill mx-2"
                            key={index}
                          >
                            {item}
                          </span>
                        ))} */}
                      </div>
                      <Link
                        className="btn btn-warning"
                        to={`/shop/product/${item._id}`}
                      >
                        Buy {item.product_price}$
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
