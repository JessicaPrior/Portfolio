import React from "react";
import { ScholarCard, ScholarshipBackground, ScholarshipTitle, ScholarText, ScholarTitle } from "./styleds/ScholarStyled";

const ScholarShip = () => {
    const cursos = [
        {
            title: 'Curso de Web Full Stack na Labenu',
            date: '6 meses - 2020/2021',
            description: 'A Labenu é uma startup que forma Desenvolvedores Web Full '+ 
            'Stack prontos para o mercado de trabalho.São mais de 1000 horas de programação'+
            'que faz com que seus alunos sejam profissionais completos tanto no Back- End quanto no Front End. Sendo o Front envolvendo: '+
            'HTML, CSS, Git, React.js, Github. E o Back: TypeScript, Node.js, SQL, Unit Testing.'
        },
        {
            title: 'Ciência da Computação \
                 - Faculdade Unopar Cascavel',
            date: '4 anos - 2014/2017 ',
            description: 'Trabalha na elaboração de programas de informática, \
            para computadores ou dispositivos móveis, como celulares e tablets. \
            Analisa as necessidades dos usuários, desenvolve softwares e aplicativos, gerencia equipes \
            de criação e instala sistemas de computação. Cria ferramentas de informática, dos softwares mais básicos, como \
            os usados para controle de estoques, até os mais complexos sistemas de processamento de informações.'
        }
    ]
    return (
        <div>
            <ScholarshipBackground>
                <ScholarshipTitle>
                    Educação
                </ScholarshipTitle>

                <div>
                    {cursos.map(item => {
                        return (
                            <ScholarCard>
                                <ScholarTitle>
                                    {item.title}
                                </ScholarTitle>
                                <ScholarText>
                                    <em>{item.date}</em>
                                    <p>{item.description}</p>
                                </ScholarText>
                            </ScholarCard>
                        )
                    })}
                </div>
            </ScholarshipBackground>
        </div>
    )
}

export default ScholarShip;