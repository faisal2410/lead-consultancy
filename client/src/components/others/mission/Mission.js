import React from 'react';
import "./Mission.css";

import { Row, Col } from 'antd';
import {PlayCircleFilled} from "@ant-design/icons";

const items = [
  {
    key: '1',
    icon: <PlayCircleFilled />,
    title: 'High Performance',
    content: 'We have 99% visa success record',
  },
  {
    key: '2',
    icon: <PlayCircleFilled />,
    title: 'Broad Network',
    content: 'We represent more than 500 universities over the world.',
  },
  {
    key: '3',
    icon: <PlayCircleFilled />,
    title: 'Simplified Workflow',
    content: 'We provide support, guidance and assistance throughout the application and even after you have reached your destination.',
  },
  {
    key: '4',
    icon: <PlayCircleFilled />,
    title: 'Best Quality Service',
    content: 'We ensure high-quality professional consultation on choosing, course, country and university. We offer professional training for Pre-CAS and VISA interviews.',
  },
  {
    key: '5',
    icon: <PlayCircleFilled />,
    title: 'One Stop Solution',
    content: 'We are an one stop solution for consultancy and language coaching.',
  },
  {
    key: '6',
    icon: <PlayCircleFilled />,
    title: 'Honesty',
    content: 'Our sincerity, determination and honesty is what makes us different from others.',
  },
 
]

const Mission=()=> {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Mission & Vision</h2>
          <p>Studies Abroad Consultant</p>
        </div>
        <div className="contentHolder">
          <p>HF Consultancy is a firm of thriving entrepreneurs and professionals with promise of commitment and honesty assisting prospective students for higher studies in more than 500 universities from around the world offering assistance, counselling and coaching.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Mission;