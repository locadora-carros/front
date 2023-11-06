import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const quickLinks = [
    {
        path: '/About',
        display: 'About'
    },
    {
        path: '#',
        display: 'Privacy Policy'
    },
    {
        path: '/cars',
        display: 'Car Listing'
    },
    {
        path: '/contact',
        display: 'Contact'
    },

]


const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                    <div className="logo footer_logo">
                        <h1>
                            <Link to="/home" className=" d-flex align-items-center gap-1">
                                <i class="ri-car-line"></i>
                                <span>
                                    Los Santos <br /> Company
                                </span>
                            </Link>
                        </h1>
                    </div>
                    <p className="footer_logo-content">
                    Obrigado por visitar nosso site de locadora de carros. Estamos aqui para tornar sua experiência de aluguel de veículos simples, segura e conveniente. Esperamos tê-lo como nosso cliente em breve!
                    </p>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer_link-title">Quick link</h5>
                        <ListGroup>
                            {
                                quickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                                        <Link to={item.path}>{item.display}
                                        </Link>

                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer_link-title mb-4">Head Office</h5>
                        <p className="office_info">Los Santos Company, João Pessoa, PB</p>
                        <p className="office_info">Phone: +55(83)9xxxx-xxxx</p>
                        <p className="office_info">Email: vaiteralgum@email.aqui.com</p>
                        <p className="office_info">Office Time 8am - 18pm</p>
                    </div>
                </Col>

                <Col lg='3' md='4'>
                    <div className="mb-4">
                        <h5 className="footer_link-title">Receber Notícias</h5>
                        <p className="section_description">Inscreva-se para ficar por dentro de nossas promoções</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Email" />
                            <span>
                                <i class="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </div>
                </Col>

                <Col lg="12">
                    <div className="footer_bottom">
                        <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                            xxxxxxxxxxx. All rights reserved.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;