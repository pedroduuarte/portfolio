import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const toRotate = [" Desenvolvedor Web", " Desenvolvedor Mobile", " Automações e Bots"];

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
            setDelta(500);
        }
    };

    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => {
        clearInterval(ticker);
    };
}, [text, delta, isDeleting, loopNum]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Seja bem vindo ao meu Portfólio</span>
                        <h1>{`Olá meu nome é Pedro Duarte`}<span className="wrap">{text}</span></h1>
                        <p>Tenho 24 anos, sou um entusiasta da tecnologia, atualmente estou estudando Análise e Desenvolvimento de Sistemas no IFPE - Campus Garanhuns.</p>
                        <button 
                            type="button"
                            className="custom-banner-btn"
                            onClick={() => window.location.href = "mailto:pdrlimaduarte@gmail.com"}>Vamos nos conectar <ArrowRightCircle size={25} />
</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" />

                    </Col>
                </Row>
            </Container>

        </section>
    )
}