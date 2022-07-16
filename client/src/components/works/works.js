import React from 'react';

import { Button, Modal } from 'antd';
import "./works.css";
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
      <div id="works" className="block worksBlock ">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How We Work for You ?</h2>
            <p>Please Click th Play Button to watch the video</p>
          </div>
          <div className="contentHolder text-center">
            <Button size="large" onClick={this.showModal}><PlayCircleFilled className="play" /> </Button>
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