import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import cintura from "../../../assets/img/png/cintura.png";
import planes from "../../../assets/img/png/planes.png";
import javaScript from "../../../assets/img/png/cintura.png";


import "./Tratamiento.scss";

export default function Tratamiento() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Modalidades de Atención Nutricional</h2>
      </Col>
      <Col lg={4} />
      <Col lg={24}>
        <Row className="row-courses">
          <Col  md={8}>
            <CardCourse
              image={cintura}
              title="Nutriólogo Presencial"
              subtitle="Atención presencial de lunes a domingo. Recibirás un completo 
              análisis de composición corporal y asesoría nutricional personalizada."
              link="https://courses.agustinnavarrogaldon.com/react"
            />
          </Col>
          <Col md={8}>
            <CardCourse
              image={planes}
              title="Nutriólogo Online"
              subtitle="El uso de la tecnología nos mantendrá más cerca. Recibe la misma 
              calidad de servicio como si asistieras a la"
              
            />
          </Col>
          <Col md={8}>
            <CardCourse
              image={javaScript}

              title="Nutriólogo Empresarial"
              subtitle="Atención a empresas. Desde semanas de la salud, Check up 
              nutricionales hasta seguimiento nutricional a los colaboradores."
              
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
        actions={[<Button>INFORMACION</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}