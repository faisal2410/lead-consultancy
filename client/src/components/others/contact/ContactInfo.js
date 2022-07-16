import React from 'react';
import "./Contact.css";
import image1 from '../../../images/service1.webp';
import image2 from '../../../images/service2.webp';
import image3 from '../../../images/service3.webp';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Tooltip } from 'antd';
const { Meta } = Card;
const items = [
  {
    key: '1',
    icon: image1,
    title: 'Meet with us',
    content: '2nd Floor, Siddiquey Plaza, Majortila, Sylhet, Bangladesh',
  },
  {
    key: '2',
    icon: image2,
    title: 'Email to us',
    content: 'info@hfconsultancy.net' 
  },
  {
    key: '3',
    icon: image3,
    title: 'Helpline',
    content: '+8801739249418, +8801731923900',
  },
]

const ContactInfo =()=> {
  return (
    <div id="feature" className="">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get In Touch</h2>
          <p>For any query please feel free to contact with us</p>
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
            <Meta title={item.title} 
              description ={`${item.content.substring(0, 100)}...`}
              style={{ fontSize:'12px' }}             
              />
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

export default ContactInfo;