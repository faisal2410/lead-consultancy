import React from 'react';
import "./Services.css";
import {Link} from "react-router-dom"

import image1 from '../../images/service1.webp';
import image2 from '../../images/service6.webp';
import image3 from '../../images/service3.webp';
import image4 from '../../images/service4.webp';
import image5 from '../../images/service5.webp';
import image6 from '../../images/service6.webp';

import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Tooltip } from 'antd';
const { Meta } = Card;
const items = [
  {
    key: '1',
    icon: image1,
    title: 'Career guidance',
    content: 'You don’t have to work a day if you love your job and our professional consultants make sure of that. We consider your inclination and guide you accordingly to platforms promising growth.',
  },
  {
    key: '2',
    icon: image2,
    title: 'Educational Consultancy',
    content: 'Practical skills, up-to-date knowledge and accredited courses ensure secure careers opening uncountable doors of opportunities. HF Consultancy team is dedicated to helping clients be skilled and prepared to follow their aspirations and achieve long term goals.',
  },
  {
    key: '3',
    icon: image3,
    title: 'IELTS Crash Course',
    content: 'HF Consultancy comes in a package of all solutions for higher studies. Many universities require language certificates for graduate programmes. HF offers language courses and coaching for such courses as IELTS, TOFEL, LIFE SKILLS and others.',
  },
  {
    key: '4',
    icon: image4,
    title: 'University Admission Guidance',
    content: 'HF Consultancy works with 500 universities globally 73% of them are TEF GOLD Rated, our team assists students from the first step to the forward throughout the journey till students finish the course of education',
  },
  {
    key: '5',
    icon: image5,
    title: 'Visa Assistance & Guidance',
    content: 'HF Consultancy consultants make an intimidating immigration process and an experience of ease and amusement for our clients.',
  },
  {
    key: '6',
    icon: image6,
    title: 'Scholarship Guidance',
    content: 'Practical skills, up-to-date knowledge and accredited courses ensure secure careers opening uncountable doors of opportunities. HF Consultancy team is dedicated to helping clients be skilled and prepared to follow their aspirations and achieve long term goals.',
  },
 
]

const Services =()=> {
  return (
    <div id="services" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Services and Benefits</h2>
          <p>Your Dream is Our Mission</p>
        </div>
        <Row gutter={[16, 16]}>
        {items.map(item => {
            return (
              <Tooltip title={`${item.content}`}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt={item.title}  src={item.icon} />}
            >
            <Link to="/contact">
            <Meta title={item.title} 
              description ={`${item.content.substring(0, 100)}...`}             
              />
            </Link>
             
            </Card>
          </Col>
        </Tooltip >
        );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Services;