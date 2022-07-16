import React from 'react';
import { Carousel } from 'antd';
import HeroVideo from "./HeroVideo";
import {Link} from "react-router-dom";
import { Row, Col } from 'antd';

import "./HeroOthers.css";
import image1 from "../../images/slide1.webp";
import image2 from "../../images/slide2.webp";
import image3 from "../../images/slide4.webp";

const items = [
  {
    key: '1',
    title: 'Career guidance',
    content:"Many of you dream but don't dare. We make you believe in yourself and follow your dreams! Top Ranked Universities,No Age Limit, Low Living Cost Work Allowed and many more...",
    icon:image1
  },
  {
    key: '2',
    title: 'Educational Consultancy',
    content: "Many of you dream but don't dare. We make you believe in yourself and follow your dreams! Top Ranked Universities,No Age Limit, Low Living Cost Work Allowed and many more...",
    icon:image2
  },
  {
    key: '3',
    title: 'IELTS Crash Course',
    content: "Many of you dream but don't dare. We make you believe in yourself and follow your dreams! Top Ranked Universities,No Age Limit, Low Living Cost Work Allowed and many more...",
    icon:image3
  },
]

const HeroOthers=({pageheader})=> {
  return (
    <div id="hero" className="heroBlock">   
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
          
            <Row gutter={[16, 16]}>   
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>  
              <img className="img-fluid hero-img" src={item.icon} alt={item.title}  />  
                   
              <div className="slider-info ">
              <h2 className="h1 pageheader ">{pageheader}</h2>
              <h3>{item.title}</h3>
                <p className="mobileHidden">{item.content}</p> 
                <Link className="btn reg-btn mb-2 mobilebtn mobileHidden" to="/contact" >Get Consultation</Link>
                <HeroVideo ></HeroVideo>
              </div>
            
              </Col>
              </Row>           
         
            </div>  
          );
        })}
      </Carousel>
      </div>
   
  );
}

export default HeroOthers;