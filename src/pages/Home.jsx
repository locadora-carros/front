import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import AboutSection from "../components/UI/AboutSection";


const Home = () => {
    return (
        <Helmet title="Home">
            <section className="p-0 hero-Slide-section">
                <HeroSlider />
            </section>


            {/* ========= AboutSection ========*/}
            <AboutSection/>
            


        </Helmet>
    );
};
export default Home;