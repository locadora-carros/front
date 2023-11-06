
import React from "react";

import { Container, Row, Col } from "reactstrap";
import '../../styles/about-section.css';
import aboutImg from '../../assets/all-images/cars-img/mcquin.png'

const AboutSection = (aboutClass) => {
    return (
        <section className="about_section" style={aboutClass === "aboutPage"
            ? { marginTop: "0px" }
            : { marginTop: "280px" }}>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="about_section-content">
                            <h4 className="section_subtitle">About Us</h4>
                            <h2 className="section_title">Bem-vindo à Los Santos Company.</h2>
                            <p className="section_description">Onde o seu conforto e conveniência estão em primeiro lugar. Com uma ampla gama de veículos modernos e bem-mantidos, estamos aqui para atender às suas necessidades de mobilidade. Seja para uma viagem de negócios, férias em família ou um evento especial, nossa locadora oferece opções variadas e preços competitivos. Com um compromisso com a qualidade e um atendimento excepcional, estamos prontos para tornar a sua experiência de aluguel de carro uma jornada fácil e agradável. Faça a sua reserva conosco hoje e descubra o mundo com conforto e estilo!
                            </p>

                            <div className="about_section-item d-flex align-items-center">
                                <p className="section_description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Qualidade
                                </p>

                                <p className="section_description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Conforto
                                </p>
                            </div>

                            <div className="about_section-item d-flex align-items-center">
                                <p className="section_description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Segurança
                                </p>

                                <p className="section_description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Velocidade
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="about_img">
                            <img src={aboutImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default AboutSection;