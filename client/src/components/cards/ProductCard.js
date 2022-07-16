import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import {useDispatch } from "react-redux";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux 
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");
     

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  // destructure
  const { images, title, description, slug } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}

      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
            alt={title}
          />
        }
        actions={[
          <Link to={`/product/${slug}`} className="text-info reg-btn d-flex justify-content-center view-product-btn align-items-center" >
            Admission Package
          </Link>,
          <Tooltip title={tooltip}>
            <button onClick={handleAddToCart} disabled={product.quantity < 1} className="btn reg-btn w-100 d-flex justify-content-center align-items-center lead px-2 add-to-cart-btn">
              
              {product.quantity < 1 ? "Package Unavailable" : "Add to Favorite"}
            </button>
          </Tooltip>,
        ]}
       className="product-card "
     
       
      >
        <Meta                  
          title={`${title}`}
         
          description={`${description && description.substring(0, 70)}...`}
          
        />
      </Card>
    </>
  );
};

export default ProductCard;
