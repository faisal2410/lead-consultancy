import React from 'react';
import "./Success.css";
import {Link} from "react-router-dom"

import image1 from '../../images/success1.webp';
import image2 from '../../images/success2.webp';
import image3 from '../../images/success3.webp';
import image4 from '../../images/success4.webp';
import image5 from '../../images/success5.webp';
import image6 from '../../images/success6.webp';
import image7 from '../../images/success7.webp';
import image8 from '../../images/success8.webp';

import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Tooltip } from 'antd';
const { Meta } = Card;
const items = [
  {
    key: '1',
    icon: image1,
    title: 'Jesmin Begum ',
    content: ' Coventry University.BA (Hons) Global Business Management(International Foundation Year) Session:Nov-2021',
  },
  {
    key: '2',
    icon: image2,
    title: 'Jaber Ahmed',
    content: 'Solent university.Subject : IFP business management. Session: Jan-2021',
  },
  {
    key: '3',
    icon: image3,
    title: 'Kamrun Nahar',
    content: ' University of Bedfordshire. Subject:MBA Business Administration (Hospital      and Health Services Management) with pre-sessional English. Session: May-2022',
  },
  {
    key: '4',
    icon: image4,
    title: 'Saif Abdul Emu',
    content: 'Teesside University. Subject: BA (Hons) Business and Management with IFP. Session: May-2022',
  },
  {
    key: '5',
    icon: image5,
    title: 'Marjana Akter Pingki',
    content: 'University of Greenwich. Subject :MBA International Business (24m Programme). Session : Apr-2022',
  },
  {
    key: '6',
    icon: image6,
    title: 'Salek Ahmed',
    content: 'University of Aberdeen. Subject :DEGREE OF MASTER OF LAWS IN INTERNATIONAL HUMAN RIGHTS. Session: Jan-2022',
  },
  {
    key: '7',
    icon: image7,
    title: 'Md Jakir Ahmed ',
    content: 'University of Aberdeen Subject : MSC IN INTERNATIONAL BUSINESSAND FINANCE Session: Jan-2022',
  },
  {
    key: '8',
    icon: image8,
    title: 'Md Tufayel Ahmed',
    content: 'Bangor University. Subject :MA Business and Marketing. Session : Jan-2022',
  },
 
]

const Success =()=> {
  return (
    <div id="services" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Our Recent Success Stories</h2>
          <p>Your Dream is Our Mission</p>
        </div>
        <Row gutter={[16, 16]}>
        {items.map(item => {
            return (
              <Tooltip title={`${item.content}`}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt={item.title}  src={item.icon} className="img-fluid img-thumbnail" />}
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

export default Success;