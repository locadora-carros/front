import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from '../assets/all-images/drive.jpg'
import OurMembers from "../components/UI/OurMembers";
import '../styles/about.css'

const About = () => {
    return (
        <Helmet title="About">
            <CommonSection title="About Us" />
            <AboutSection aboutClass='aboutPage'/>

            <selection className="About_page-section">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <div className="about_page-img">
                                <img src={driveImg} alt="" className="w-100 rounded-3" />
                            </div>
                        </Col>



                        <Col lg='6' md='6' sm='12'>
                            <div className="about_page-content">
                                <h2 className="section_title">Estamos empenhados em fornecer soluções de viagem segura</h2>

                                <p className="section_description">Na nossa locadora de carros, a segurança é uma prioridade inegociável. Nosso compromisso é proporcionar soluções de transporte seguras e confiáveis para todos os nossos clientes. Nossos veículos são regularmente inspecionados e mantidos de acordo com os mais altos padrões de segurança, garantindo que você possa viajar com tranquilidade. Além disso, contamos com uma equipe dedicada de profissionais que estão disponíveis para auxiliá-lo a qualquer momento durante a sua locação. Sabemos o quanto a segurança é importante para você e, por isso, investimos em tecnologia de ponta e medidas rigorosas de higiene para garantir que sua experiência de aluguel seja não apenas conveniente, mas também segura. Escolha a nossa locadora e desfrute de uma viagem tranquila e sem preocupações.</p>


                                <p className="section_description"></p>

                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <span className="fs-4"><i class="ri-phone-line"></i></span>
                                    <div>
                                        <h6 className="section_subtitle">Precisa de ajuda?</h6>
                                        <h4>+xx (xx)xxxxx-xxxx</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </selection>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5">
                            <h6 className="section_subtitle">Experts</h6>
                            <h2 className="section_title">Nossos membros</h2>
                        </Col>
                        <OurMembers/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
};
export default About;