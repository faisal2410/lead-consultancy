import {Link} from "react-router-dom"
import axios from "axios";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/nav/Header";
import PageTitle from "../components/pageTitle/PageTitle";
import HeroOthers from "../components/hero/HeroOthers";
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const LeadNews = () => {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [searchText, setSearchText] = useState("");
 
  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API}/getallnewsitems`
      );
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

  return (
    <DefaultLayout>
    <PageTitle title="Blog"></PageTitle>
      <div className="container-fluid">
       
        <div className="row gx-0">
          <div className="col-md-12">
          <HeroOthers></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {loading}
            <div className="d-grid  px-2  mt-5">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                className="border h-100 w-100 form-control"
                placeholder="Search Blog"
              />
            </div>
            {newsItems.length > 0 && (
              <>
                <div className=" my-5">
                <Row gutter={[16, 16]}>
                  {newsItems
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                    .map((item) => {
                      return (
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              // cover={<img alt={item.title}  src={item.icon} />}
            >
            <Link to={`/newsdesc/${item._id}`}>
            <Meta title={item.title} 
              description ={`${item.description.substring(0, 100)}...`}             
              />
            </Link>
             
            </Card>
          </Col>
                        
                      );
                    })}
                    </Row>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LeadNews;
