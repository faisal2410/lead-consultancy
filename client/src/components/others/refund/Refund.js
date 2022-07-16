import React from 'react';
import "./Refund.css";

import { Row, Col } from 'antd';
import {PlayCircleFilled} from "@ant-design/icons";

const items = [
  {
    key: '1',
    icon: <PlayCircleFilled />,
    title: '',
    content: 'After tutorial account activation money back is not available.',
  },
  {
    key: '2',
    icon: <PlayCircleFilled />,
    title: '',
    content: 'THIS IS NOT A BUY-AND-TRY PRODUCT',
  },
  {
    key: '3',
    icon: <PlayCircleFilled />,
    title: '',
    content: 'Refund is applicable for software and plugins, if the products are not functioning, producing errors or you have not received access to them at any time during the first 7 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 7 days or early. That is a firm promise and commitment.',
  },
  {
    key: '4',
    icon: <PlayCircleFilled />,
    title: '',
    content: 'To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.',
  },
  {
    key: '5',
    icon: <PlayCircleFilled />,
    title: '',
    content: 'Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.',
  },
  
]

const Policy=()=> {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Refund & Return Policy</h2>
          <p>Your privacy is very important to us. At HF Consultancy:</p>
        </div>
        {/* <div className="lead">
          <p>  We don’t ask for personal information unless we truly need it. We don’t share your personal information except comply with the law, to provide services and to protect our rights.We don’t store personal information unless it’s required for our services.It is HF Consultancy’s policy to respect your privacy regarding any information we may collect while operating our website. We have outlined our privacy policy below. This Privacy Policy governs the manner in which HF Consultancy collects, uses, maintains and discloses information collected from users (each, a “User”) of the https://www.hfconsultancy.net website.</p>
        </div> */}
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 24 }} key={item.key} >
                <div className="">
                  {/* <div className="icon">
                    {item.icon}
                  </div> */}
                  {/* <h3> {item.title}</h3> */}
                  <p className="lead"><span className="icon"> {item.icon} &nbsp;</span>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Policy;