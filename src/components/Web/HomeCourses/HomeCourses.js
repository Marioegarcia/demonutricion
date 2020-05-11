import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/pack (1).jpg";
import reactNative from "../../../assets/img/jpg/pack (2).jpg";
import javaScript from "../../../assets/img/jpg/pack (3).jpg";
import wordPress from "../../../assets/img/jpg/pack (4).jpg";
import prestaShop from "../../../assets/img/jpg/pack (1).jpg";
import cssGrid from "../../../assets/img/jpg/pack (2).jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Paquetes reductivos</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="React JS Hooks"
              subtitle="Intermedio - React/JavaScript"
              link="https://courses.agustinnavarrogaldon.com/react"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React Native Expo"
              subtitle="Intermedio - React/JavaScript"
              link="https://courses.agustinnavarrogaldon.com/react-native-expo"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="JavaScript ES6"
              subtitle="Básico - JavaScript"
              link="https://courses.agustinnavarrogaldon.com/javascript"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordPress}
              title="WordPress"
              subtitle="Básico - WordPress"
              link="https://courses.agustinnavarrogaldon.com/wordpress"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={prestaShop}
              title="PrestaShop 1.7"
              subtitle="Básico - PrestaShop"
              link="https://courses.agustinnavarrogaldon.com/prestashop"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={cssGrid}
              title="CSS Grid"
              subtitle="Intermedio - CSS"
              link="https://courses.agustinnavarrogaldon.com/css-grid"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}