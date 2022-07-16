import React from 'react';

import { Button, Modal } from 'antd';
import "./HeroOthers.css";
import {PlayCircleFilled} from "@ant-design/icons";

class Works extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (     
        <div className="">  
        <div className="">
        <div className="">
            <Button size="large" type="ghost" className="text-white" onClick={this.showModal}><PlayCircleFilled className="play"/>Learn More </Button>
          </div>
          <Modal
            title="How HF Consultancy Helps Students?"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/hEovLBSRvyY"></iframe>
          </Modal>
        </div>      
         
        </div>
      
    );
  }
}

export default Works;