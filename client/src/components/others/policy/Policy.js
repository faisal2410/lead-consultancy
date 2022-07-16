import React from 'react';
import "./Policy.css";

import { Row, Col } from 'antd';
import {PlayCircleFilled} from "@ant-design/icons";

const items = [
  {
    key: '1',
    icon: <PlayCircleFilled />,
    title: 'Personal identification information',
    content: 'We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.',
  },
  {
    key: '2',
    icon: <PlayCircleFilled />,
    title: 'Non-personal identification information',
    content: 'We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.',
  },
  {
    key: '3',
    icon: <PlayCircleFilled />,
    title: 'Web browser cookies',
    content: 'Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.',
  },
  {
    key: '4',
    icon: <PlayCircleFilled />,
    title: 'How we protect your information',
    content: 'We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.',
  },
  {
    key: '5',
    icon: <PlayCircleFilled />,
    title: 'Sharing your personal information',
    content: 'We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.',
  },
  {
    key: '6',
    icon: <PlayCircleFilled />,
    title: 'Electronic newsletters',
    content: 'If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.',
  },
  {
    key: '7',
    icon: <PlayCircleFilled />,
    title: 'Third party websites',
    content: 'Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.',
  },
  {
    key: '8',
    icon: <PlayCircleFilled />,
    title: 'Compliance with children’s online privacy protection act',
    content: 'Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.',
  },
  {
    key: '9',
    icon: <PlayCircleFilled />,
    title: 'Changes to this privacy policy',
    content: 'HF Consultancy has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.',
  },
  {
    key: '10',
    icon: <PlayCircleFilled />,
    title: 'Your acceptance of these terms',
    content: 'By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.',
  },
  {
    key: '11',
    icon: <PlayCircleFilled />,
    title: 'Contacting us',
    content: 'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please Contact Us.',
  },
 
]

const Policy=()=> {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Privacy Policy</h2>
          <p>Your privacy is very important to us. At HF Consultancy:</p>
        </div>
        <div className="lead">
          <p>  We don’t ask for personal information unless we truly need it. We don’t share your personal information except comply with the law, to provide services and to protect our rights.We don’t store personal information unless it’s required for our services.It is HF Consultancy’s policy to respect your privacy regarding any information we may collect while operating our website. We have outlined our privacy policy below. This Privacy Policy governs the manner in which HF Consultancy collects, uses, maintains and discloses information collected from users (each, a “User”) of the https://www.hfconsultancy.net website.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 24 }} key={item.key} >
                <div className="">
                  {/* <div className="icon">
                    {item.icon}
                  </div> */}
                  <h3> <span className="icon"> {item.icon} &nbsp;</span>{item.title}</h3>
                  <p className="lead">{item.content}</p>
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