import React from "react";
import imac from "../assets/imac.png"
import ipad from "../assets/ipad.png"
import macbook from "../assets/macbook.png"
import { GitButton, Informations, PrincipalTitle, ProjectsBackground, ProjectsSubitle, ProjectsText, ProjectsTitle, Image, ProjectsCard } from "./styleds/ProjectsStyled";

const Projects = () => {
    const projects = [
        {
            link: "https://github.com/JessicaPrior/LAMA" ,
            image: macbook,
            title: 'LAMA',
            subtitle: 'Back-end',
            description: 'Projeto Back-end Labenu Musical Awards, consruida uma API TypeScript e MySQL, ' +
                'plataforma de cadastro de usuarios, bandas, shows e buscas sobre esses itens, podendo ser utilizada ' +
                'para construção de projetos em Front-end.',
            button1: 'ver no GitHub'
        },
        {
            link: "https://github.com/JessicaPrior/labook",
            image: ipad,
            title: 'Labook',
            subtitle: 'Back-end',
            description: 'Projeto Back-end baseado na rede social Facebook, ' +
                'construida uma API utilizando TypeScript e MySQL, contendo cadastro, ' +
                'login, criação de posts, feed, busca por Id e solicitações de amizade, ' +
                'podendo ser utilizada para projetos em Front-end.',
            button1: 'ver no GitHub'
        },
        {
            link: "https://github.com/JessicaPrior/FullStack-Frontend",
            link2: "https://github.com/JessicaPrior/FullStack-Backend",
            image: imac,
            title: 'Ypic',
            subtitle: 'Full Stack',
            description: 'Projeto Full Stack baseado no google fotos, com opções de cadastro, ' +
                'login, criação de albuns, adicionar imagens (com titulo, descrição e hashtags), buscador de imagens (todas) e por Id. ' +
                'Contém interface responsiva e simples para melhor ' +
                'experiencia do usuário. Elaborado a parte de front-end com React e JavaScrip.' +
                ' E na parte de back-end com TypeScript, MySQL.',
            button1: 'ver no GitHub',
            button2: 'ver no GitHub'
        }
    ];
    return (
        <div id="projects">
            <ProjectsBackground>
                <PrincipalTitle>
                    Meus Projetos
                </PrincipalTitle>

                {projects.map((item, index) => {
                    return (
                        <ProjectsCard tabIndex={index}>
                            <Image>
                                <img src={item.image} />
                            </Image>

                            <Informations>
                                <ProjectsTitle>
                                    {item.title}
                                </ProjectsTitle>
                                <ProjectsSubitle>
                                    {item.subtitle}
                                </ProjectsSubitle>
                                <ProjectsText>
                                    <p>{item.description}</p>
                                </ProjectsText>
                                
                                <GitButton>
                                    <a href={item.link} target="_blank">{item.button1}</a>
                                </GitButton>
                                {item.button2 ?
                                    <GitButton tabIndex={index}>
                                        <a href={item.link2} target="_blank">{item.button2}</a>
                                    </GitButton>
                                    : ""
                                }
                            </Informations>
                        </ProjectsCard>
                    )
                })}
            </ProjectsBackground>
        </div>
    )
}

export default Projects;