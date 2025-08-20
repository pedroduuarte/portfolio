import { Container, Row, Col, Image } from "react-bootstrap";
import personalPhoto from "../assets/img/personal-photo.jpg";

export const AboutMe = () => {
    return (
        <section className="about-me" id="aboutme">
            <Container className="align-items-center">
                <Row>
                    <Col>
                        <h2>Sobre Mim</h2>
                        <p>Olá! Me chamo Pedro Lucas, tenho 24 anos. Tenho paixão por aprender novas tecnologias e resolver problemas complexos.</p>
                        <p>Minha trajetória começou na área administrativa, onde atuei como auxiliar administrativo, desenvolvendo habilidades importantes de organização, atenção aos detalhes e trabalho em equipe. Com o tempo, descobri minha paixão por tecnologia e decidi direcionar minha carreira para essa área.</p>
                        <p>Tive a oportunidade de participar do programa de estágio da Compass UOL, atuando na área de Data Engineering, onde trabalhei com a metodologia Scrum e utilizei tecnologias como Python, Git, Docker, SQL, SQLite e diversos serviços da AWS, como S3, EC2 e Lambda. Durante essa experiência, conquistei a certificação AWS Certified Cloud Practitioner, que reforçou meu conhecimento em computação em nuvem.</p>
                        <p>Além disso, atuo como freelancer, desenvolvendo soluções para empresas e clientes. Já trabalhei com Node.js, JavaScript, CSS, React Native e Java, o que ampliou minha experiência em desenvolvimento web, mobile e backend.</p>
                    </Col>
                    <Row>
                        <Image src={personalPhoto} alt="Minha foto" />
                    </Row>
                </Row>
            </Container>     
        </section>
    )
}