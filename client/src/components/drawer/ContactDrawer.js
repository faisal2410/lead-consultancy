import React, { useState } from 'react';
import { Drawer } from 'antd';
import Contact from "../others/contact/Contact";
import "./ContactDrawer.css";

const ContactDrawer = () => {
  const [visible, setVisible] = useState(true);  

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
     
      <Drawer
      destroyOnClose
       title="Request a Callback" 
       placement="right"  
       onClose={onClose}  
       visible={visible}>
      <Contact></Contact>
       
      </Drawer>
    </>
  );
};

export default ContactDrawer;


