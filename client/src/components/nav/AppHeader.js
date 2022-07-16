import React from 'react';
import { Anchor,Button} from 'antd';
import "./AppHeader.css";
import { Avatar, Image } from 'antd';
import logo from "../../images/logo.webp";

const { Link } = Anchor;


function AppHeader() {
 
  return (
    <div className="container-fluid">
      <div className="header">
     
        <div className="mobileHidden  ">        
          <Anchor targetOffset="65">         
          <Link className="fw-bold  " href="/"  title={<Avatar
      src={
        <Image
          src={logo}
          style={{
            width: 25,
          }}
        />
      }
    />} />   
         
  
            <Button type="link" href="https://forms.gle/7yTc7hTsMf1fcrtG8" className="fw-bold me-2"  target="_blank"  >Apply Now</Button>  
            <Button type="link" href="https://wa.me/8801731923900" target="_blank" className="fw-bold"  >Whatsapp</Button>  
   
                
          </Anchor>
        </div>
        <div className="mobileVisible">
        <Anchor targetOffset="65"> 
      
       <Button type="link" href="https://forms.gle/7yTc7hTsMf1fcrtG8" className="fw-bold me-2"  target="_blank"  >Apply Now</Button>      
       <Button type="link" href="https://wa.me/8801731923900" target="_blank" className="fw-bold"  >Whatsapp</Button>
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;