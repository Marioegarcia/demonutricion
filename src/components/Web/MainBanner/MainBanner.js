import React from "react";
import { Row, Col } from "antd";
import Portada from "../../../assets/img/jpg/banner.jpg";
import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      
      <Row>
        <Col lg={4} />
        <Col lg={16}>
        
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}