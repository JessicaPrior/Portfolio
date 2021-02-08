import React from "react";
import { EmployBackground, EmployText, EmployTitle, Icons, IconsContainer } from "./styleds/EmployStyled";
import git from "../assets/github.svg"
import link from "../assets/linkedin.svg"
import insta from "../assets/instagram.svg"

const EmployMe = () => {
    return (
        <div id="contact">
            <EmployBackground>
                <EmployTitle>
                    <p>Contrate-me!</p>
                </EmployTitle>
                <EmployText>
                    <p>
                        Estou procurando oportunidades de trabalho onde
                        possa aprender, desenvolver e crescer na minha carreira.
                    </p>
                    <p>
                        E-mail para contato: jsscprior@gmail.com
                    </p>
                    <p>Celular: (45) 99915-7044</p>
                </EmployText>
                <IconsContainer>
                    <a href="https://github.com/JessicaPrior" target="_blank"><Icons src={git} alt="GitHub Icon"/></a>
                    <a href="https://www.linkedin.com/in/jessica-prior-376797166/" target="_blank"><Icons src={link} alt="Linkedin Icon" /></a>
                    <a href="https://www.instagram.com/jescka.jpg/" target="_blank"><Icons src={insta} alt="Instagram Icon" /></a>
                </IconsContainer>
            </EmployBackground>
        </div>
    )
}

export default EmployMe;
