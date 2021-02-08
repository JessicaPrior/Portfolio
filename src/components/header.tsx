import React from "react"
import { HeaderButtonsContainer, HeaderButton, HeaderBackground, CardHeader } from "./styleds/HeaderStyled";

const Header = () => {
    return (
        <div >
            <HeaderButtonsContainer>
                <HeaderButton >
                    <a href="#aboutme">Quem sou</a>
                </HeaderButton>
                <HeaderButton>
                    <a href="#projects">Projetos</a>
                </HeaderButton>
                <HeaderButton>
                    <a href="#contact">Contato</a>
                </HeaderButton>
            </HeaderButtonsContainer>
            <HeaderBackground>
                <CardHeader>    
                    <h1>Eu sou<br/>&nbsp;Jessica Prior</h1>
                    <h4>Desenvolvedora Web Full Stack</h4>
                    <p>Apaixonada por tecnologia e programação</p>
                </CardHeader>
            </HeaderBackground>
        </div>
    )
}

export default Header;