import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const {   
    category,
    subs,
    shipping,
    color,
    brand  
  } = product;

  return (
    <ul className="list-group">
     

      {category && (
        <li className="list-group-item">
          Country :{"   "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          City : {"  "}
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name} {" , "}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        Scholarship : {"    "}
        <span className="label label-default label-pill pull-xs-right">
          {shipping}
        </span>
      </li>

      <li className="list-group-item">
        Language : {" "}
        <span className="label label-default label-pill pull-xs-right">
          {color}
        </span>
      </li>

      <li className="list-group-item">
        Continent : {" "}
        <span className="label label-default label-pill pull-xs-right">
          {brand}
        </span>
      </li>     
    </ul>
  );
};

export default ProductListItems;
