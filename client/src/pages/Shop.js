import React, { useState, useEffect } from "react";
import {
  getProductsByCount,
  fetchProductsByFilter,
} from "../functions/product";
import { getCategories } from "../functions/category";
import { getSubs } from "../functions/sub";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";
import { Menu, Checkbox, Radio } from "antd";
import { 
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Star from "../components/forms/Star";
import DefaultLayout from "../components/nav/Header";
import PageTitle from "../components/pageTitle/PageTitle"


const { SubMenu } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0,0]);
  const [ok] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [setSub] = useState("");
  const [brands] = useState([
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Australia",
    "Africa",
    "Antarctica",
  ]);
  const [brand, setBrand] = useState("");
  const [colors] = useState([
    "English",
    "Spanish",
    "Mendarin",
    "Bangla",
    "German",
  ]);
  const [color, setColor] = useState("");
  const [shipping, setShipping] = useState("");

  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {   
    loadAllProducts();
     // fetch categories
     getCategories().then((res) => setCategories(res.data));
       // fetch subcategories
    getSubs().then((res) => setSubs(res.data));
  }, []);

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  // 2. load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
      if (!text) {
        loadAllProducts();
      }
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  // 3. load products based on price range
  useEffect(() => {
    console.log("ok to request");
    fetchProducts({ price });
  }, [ok]);

  
  // 4. load products based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 ps-4 pe-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));
     // handle check for categories
  const handleCheck = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setStar("");
    setSub("");
    setBrand("");
    setColor("");
    setShipping("");
    // console.log(e.target.value);
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }

    setCategoryIds(inTheState);
    // console.log(inTheState);
    fetchProducts({ category: inTheState });
  };

   // 5. show products by star rating
   const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setSub("");
    setBrand("");
    setColor("");
    setShipping("");
    setStar(num);
    fetchProducts({ stars: num });
  };

  const showStars = () => (
    <div className="pe-4 ps-4 pb-2">
      <Star starClick={handleStarClick} numberOfStars={5} />
      <Star starClick={handleStarClick} numberOfStars={4} />
      <Star starClick={handleStarClick} numberOfStars={3} />
      <Star starClick={handleStarClick} numberOfStars={2} />
      <Star starClick={handleStarClick} numberOfStars={1} />
    </div>
  );


  // 6. show products by sub category
  const showSubs = () =>
    subs.map((s) => (
      <div
        key={s._id}
        onClick={() => handleSub(s)}
        className="p-1 m-1 badge bg-secondary"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    ));

  const handleSub = (sub) => {
    // console.log("SUB", sub);
    setSub(sub);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setBrand("");
    setColor("");
    setShipping("");
    fetchProducts({ sub });
  };
// 7. show products based on brand name
const showBrands = () =>
brands.map((b) => (
  <Radio
    key={b}
    value={b}
    name={b}
    checked={b === brand}
    onChange={handleBrand}
    className="pb-1 ps-4 pe-4"
  >
    {b}
  </Radio>
));

const handleBrand = (e) => {
setSub("");
dispatch({
  type: "SEARCH_QUERY",
  payload: { text: "" },
});
setPrice([0, 0]);
setCategoryIds([]);
setStar("");
setColor("");
setShipping("");
setBrand(e.target.value);
fetchProducts({ brand: e.target.value });
};

 // 8. show products based on color
 const showColors = () =>
 colors.map((c) => (
   <Radio
   key={c}
     value={c}
     name={c}
     checked={c === color}
     onChange={handleColor}
     className="pb-1 ps-4 pe-4"
   >
     {c}
   </Radio>
 ));

const handleColor = (e) => {
 setSub("");
 dispatch({
   type: "SEARCH_QUERY",
   payload: { text: "" },
 });
 setPrice([0, 0]);
 setCategoryIds([]);
 setStar("");
 setBrand("");
 setColor(e.target.value);
 setShipping("");
 fetchProducts({ color: e.target.value });
};

// 9. show products based on shipping yes/no
const showShipping = () => (
 <>
   <Checkbox
     className="pb-2 ps-4 pe-4"
     onChange={handleShippingchange}
     value="Yes"
     checked={shipping === "Yes"}
   >
     Yes
   </Checkbox>

   <Checkbox
     className="pb-2 ps-4 pe-4"
     onChange={handleShippingchange}
     value="No"
     checked={shipping === "No"}
   >
     No
   </Checkbox>
 </>
);

const handleShippingchange = (e) => {
 setSub("");
 dispatch({
   type: "SEARCH_QUERY",
   payload: { text: "" },
 });
 setPrice([0, 0]);
 setCategoryIds([]);
 setStar("");
 setBrand("");
 setColor("");
 setShipping(e.target.value);
 fetchProducts({ shipping: e.target.value });
};




  return (
    <DefaultLayout>
     <PageTitle title="Search"></PageTitle>
    <div className="container-fluid">
   
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4 className="section-title">Search/Filter</h4>
          <hr />

          <Menu defaultOpenKeys={["1", "2","3","4","5","6","7"]} mode="inline">
           {/* price */}
            {/* <SubMenu
              key="1"
              title={
                <span className="h6 section-title">
                  <DollarOutlined /> Tution Fee Range
                </span>
              }
            >
              <div>
                <Slider
                  className="ms-4 me-4"
                  tipFormatter={(v) => `Tk${v}`}
                  range
                  value={price}
                  onChange={handleSlider}
                  max="100000"
                />
              </div>
            </SubMenu> */}
             {/* category */}
             <SubMenu
              key="2"
              title={
                <span className="h6 section-title">
                  <DownSquareOutlined /> Search by Country
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showCategories()}</div>
            </SubMenu>
              {/* stars */}
              <SubMenu
              key="3"
              title={
                <span className="h6 section-title">
                  <StarOutlined /> Rating
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showStars()}</div>
            </SubMenu>

              {/* sub category */}
              <SubMenu
              key="4"
              title={
                <span className="h6 section-title">
                  <DownSquareOutlined /> Search by City
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="ps-4 pe-4">
                {showSubs()}
              </div>
            </SubMenu>
              {/* brands */}
              <SubMenu
              key="5"
              title={
                <span className="h6 section-title">
                  <DownSquareOutlined /> Search by Continent
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pe-5">
                {showBrands()}
              </div>
            </SubMenu>
             {/* colors */}
             <SubMenu
              key="6"
              title={
                <span className="h6 section-title">
                  <DownSquareOutlined /> Language
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pe-5">
                {showColors()}
              </div>
            </SubMenu>

            {/* shipping */}
            <SubMenu
              key="7"
              title={
                <span className="h6 section-title">
                  <DownSquareOutlined /> Scholarship
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pe-5">
                {showShipping()}
              </div>
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9 pt-2" >
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="section-title text-center fw-bold ">Universities</h4>
          )}

          {products.length < 1 && <p>No University found</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div key={p._id} className="col-md-6 mt-3" >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Shop;
