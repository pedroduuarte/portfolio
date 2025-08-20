import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-img1.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/proj-img3.png";
import projImg4 from "../assets/img/proj-img4.png";
import projImg5 from "../assets/img/proj-img5.jpg";
import projImg6 from "../assets/img/proj-img6.png";


export const Projects = () => {
    const projects = [
        {
            title: "FluentPath",
            description: "Projeto feito com HTML, CSS, JavaScript e Node.js.\nSite para ajudar pessoas que desejam aprender a língua inglesa, com postagens, chat em grupo e tutor IA.",
            imgUrl: projImg1,
            link: "https://github.com/pedroduuarte/fluentpath-project"
        },
        {
            title: "Fast API para coleta de webhooks.",
            description: "Projeto feito para um cliente onde foi desenvolvida uma FastAPI para coleta de webhooks de dados de uma assinatura no site da Kirvano e envio para um banco de dados na Supabase. Além disso, um bot capaz de analisar as infomações desse banco de dados e gerenciar as assinaturas via telegram.",
            imgUrl: projImg2,
            link: "https://github.com/pedroduuarte/"
        },
        {
            title: "ChatBot WhatsApp",
            description: "ChatBot para atendimento de clientes feito para um buffet da minha cidade, a ideia é que o chatBot atenda os clientes inicialmente para depois passar o atendimento para os atendentes. Projeto feito em Node.js (Repositório privado, feito para um cliente)",
            imgUrl: projImg3,
            link: "https://github.com/pedroduuarte/chatbot-whatsapp"
        },
        {
            title: "Bot do Discord",
            description: "Bot do discord para um canal, afim de ajudar na entrada de novos membros, ajudar o suporte no gerenciamento do canal, enviar cobrança e avisos sobre o vencimento do plano de acesso ao canal. Projeto feito em Python (Repositório privado, feito para um cliente)",
            imgUrl: projImg4,
            link: "https://github.com/pedroduuarte/bot-pdk/blob/main/exemplo.py"
        },
        {
            title: "SwipeBite Mobile App",
            description: "Aplicativo feito em React Native que funciona como um jogo onde usuários podem dar 'match' em restaurantes juntamente com amigos para encontrar lugares para comer de acordo com a localização atual. Projeto foi feito em equipe para um cliente, e por isso o repositório não está disponível publicamente.",
            imgUrl: projImg5,
            link: "https://github.com/pedroduuarte/"
        },
        {
            title: "Bella Itália SOA",
            description: "Sistema de pedidos para um restaurante, onde os clientes podem fazer pedidos pelo site e os funcionários podem gerenciar esses pedidos. Projeto feito na arquitetura orientada a serviços",
            imgUrl: projImg6,
            link: "https://github.com/pedroduuarte/bellaitalia-soa"
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Alguns projetos que já desenvolvi!</p>
                        <Row>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};