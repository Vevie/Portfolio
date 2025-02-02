import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col } from "react-bootstrap";
import linkedin from '../assets/linkedin.svg';
import facebooksquare from '../assets/facebook-square.svg';
import instagram from '../assets/instagram.svg';

 


export const Skills = () => {
     const responsive ={
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    }; 


    return(
        <section className= "skills" id="skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="skills-bx">
                            <h2>Skills</h2>
                            <p>higewbgewbfeibfdvdhsvbds sjdvbdshjv bhsv</p>
                            <Carousel responsive={responsive} className="d-flex skills-slider"> 
                                <div className="item">
                                    <img src={instagram} alt="insta" />
                                    <h5>please</h5>
                                </div>
                                <div className="item">
                                    <img src={linkedin} alt="" />
                                    <h5>hello</h5>
                                </div>
                                <div className="item">
                                    <img src={facebooksquare} alt="" />
                                    <h5>there</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}