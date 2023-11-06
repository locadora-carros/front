import React from "react";
import '../../styles/our-member.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import interro1 from "../../assets/all-images/interro.jpg";
import interro2 from "../../assets/all-images/interro.jpg";
import interro3 from "../../assets/all-images/interro.jpg";
import interro4 from "../../assets/all-images/interro.jpg"
import interro5 from "../../assets/all-images/interro.jpg"


const OUR__MEMBERS = [
    {
        name: "xxxxxx",
        experience: "xxxxxxxxxx",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: interro1,
    },

    {
        name: "xxxxxxx",
        experience: "xxxxxxxxx",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: interro2,
    },

    {
        name: "xxxxxxx",
        experience: "xxxxxxx",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: interro3,
    },

    {
        name: "xxxxxxxx",
        experience: "xxxxxxxx",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: interro4,
    },

    {
        name: "xxxxxxxx",
        experience: "xxxxxxxx",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: interro5,
    },
];

const OurMembers = () => {
    return <>
        {
            OUR__MEMBERS.map((item, index) => (
                <Col lg='3' md='3' sm='4' xs='6' key={index} className="mb-4">
                    <div className="single_member">
                        <div className="single_member-img">
                            <img src={item.imgUrl} alt="" className="w-100" />

                            <div className="single_member-social">
                                <Link to={item.fbUrl}><i class="ri-facebook-line"></i></Link>

                                <Link to={item.twitUrl}><i class="ri-twitter-x-line"></i></Link>

                                <Link to={item.linkedinUrl}><i class="ri-linkedin-line"></i></Link>

                                <Link to={item.instUrl}><i class="ri-instagram-line"></i></Link>
                            </div>
                        </div>

                        <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                        <p className="section_description text-center">{item.experience}
                        </p>
                    </div>
                </Col>
            ))
        }
    </>

}

export default OurMembers