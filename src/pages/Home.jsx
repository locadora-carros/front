import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import carData from '../assets/data/carData'
import CarItem from "../components/UI/CarItem";

const Home = () => {
    return (
        <Helmet title="Home">
            <section className="p-0 hero-Slide-section">
                <HeroSlider />
            </section>


            {/* ========= AboutSection ========*/}
            <AboutSection />

            {/* =========== car offer section ============= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2 className="section_title">Hot Offers</h2>
                        </Col>

                        {carData.slice(0, 6).map((item) => (
                            <CarItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};
export default Home;