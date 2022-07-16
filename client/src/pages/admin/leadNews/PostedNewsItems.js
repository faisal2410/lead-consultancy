import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DefaultLayout from "../../../components/nav/Header";


const PostedNewsItems=()=> {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const history = useHistory();
  // const user = JSON.parse(localStorage.getItem("sheynews-user"));
  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${process.env.REACT_APP_API}/getallnewsitems`);
      setLoading(false);
      setNewsItems(result.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (newsid) => {
    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API}/deletenewsitem`, {
        newsid,
      });
      getData()
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <DefaultLayout>
    <div className="container-fluid">
   
      <div className="row">
        <div className="col-md-12">
        {loading }

{newsItems.length > 0 && (
  <div className="p-2 mb-1">
    <h1 className="h1 text-center ">
      Posted Lead News
    </h1>
    <table className="w-100 border  p-5">
      <thead className="w-100">
        <tr className="w-100">
          {/* <th className="border  p-2">Id</th> */}
          <th className="border  p-2">Title</th>
          <th className="border p-2">Posted on</th>
          <th className="border text-center p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {newsItems.map((item) => {
          return (
            <tr>
              {/* <td className="border p-2">{item._id}</td> */}
              <td className="border p-2">
                {item.title}
              </td>
              <td className="border p-2">
                {item.createdAt.slice(0, 10)}
              </td>
              <td className=" text-center p-1">
                <div className="d-flex justify-content-center align-content-center ">
                  <button className="px-5 py-1 bg-danger border-0 me-2 text-white" onClick={()=>deleteItem(item._id)}>
                    Delete
                  </button>
                  <button
                    className="px-5 py-1 bg-dark border-0  text-white"
                    onClick={() => history.push(`/admin/leadnews/editleadnews/${item._id}`)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
)}
        </div>
      </div>
    </div>
    
    </DefaultLayout>
  );
}

export default PostedNewsItems;
