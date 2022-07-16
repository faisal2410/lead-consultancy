import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import DefaultLayout from "../components/nav/Header";
import PageTitle from "../components/pageTitle/PageTitle";
import HeroOthers from "../components/hero/HeroOthers";

const Cart = ({ history }) => {
  const { cart } = useSelector((state) => ({ ...state })); 
  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Tution Fee</th>
          <th scope="col">Continent</th>
          <th scope="col">Language</th>        
          <th scope="col">Scholarship</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <DefaultLayout>
    <PageTitle title="Favorite"></PageTitle>
      <div className="container-fluid pt-2">
        <div className="row gx-0">
          <div className="col-md-12" >
          <HeroOthers></HeroOthers>
         
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" >
            <h4>Favorite : {cart.length} University</h4>

            {!cart.length ? (
              <p>
                No products in cart. <Link to="/shop">Continue Searching.</Link>
              </p>
            ) : (
              showCartItems()
            )}
          </div>
          
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
