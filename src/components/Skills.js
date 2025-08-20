import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AwsLogo from '../assets/img/aws-logo.svg'
import PythonLogo from '../assets/img/python-logo.svg';
import ReactLogo from '../assets/img/react-logo.svg';
import JavaLogo from '../assets/img/java-logo.svg';
import KotlinLogo from '../assets/img/kotlin-logo.svg'
import DockerLogo from '../assets/img/docker-logo.svg'
import colorSharp from '../assets/img/color-sharp.png'
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Essas são algumas ferramentas e tecnologias que domino</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={JavaLogo} alt="Imagem" />
                                    <h5>Desenvolvimento em Java</h5>
                                </div>
                                <div className="item">
                                    <img src={ReactLogo} alt="Imagem" />
                                    <h5>Desenvolvimento Web/Mobile</h5>
                                </div>
                                <div className="item">
                                    <img src={PythonLogo} alt="Imagem" />
                                    <h5>Desenvolvimento/Automações/Dados</h5>
                                </div>
                                    <div className="item">
                                    <img src={KotlinLogo} alt="Imagem" />
                                    <h5>Desenvolvimento Mobile</h5>
                                </div>
                                <div className="item">
                                    <img src={DockerLogo} alt="Imagem" />
                                    <h5>Orquestração de Containers</h5>
                                </div>
                                    <div className="item">
                                    <img src={AwsLogo} alt="Imagem" />
                                    <h5>AWS Certified</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp} alt="background" />
            <img className="background-image-left" src={colorSharp2} alt="" />
        </section>
    )
}