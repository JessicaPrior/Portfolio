import React from "react";
import { AboutMeBackground, AboutMeTitle, AboutMeText, CVButton, LanguagesText, Photo, Img } from "./styleds/AboutMeStyled";
import photo from "../assets/perfil.jpg"
const AboutMe = () => {
    return (
        <div id="aboutme">
            <AboutMeBackground>
                <Photo>
                    <Img src={photo} alt="Foto sobre mim" />
                </Photo>
                <div>
                    <AboutMeTitle>
                        Sobre mim
                    </AboutMeTitle>
                    <AboutMeText>
                        <p>
                            Olá, me chamo Jessica, tenho 24 anos e desde que
                            me conheço por gente adoro mexer em computadores e afins.
                            Meus hobbies são: ler livros, assistir séries, amo de coração
                            andar de moto e curto variados jogos. Atualmente estou estudando
                            Python para ampliar meus conhecimentos sobre programação.
                        </p>
                    </AboutMeText>
                    <LanguagesText>
                        <p>
                            | TypeScript | MySQL | HTML | CSS | JavaScript 
                        </p>
                    </LanguagesText>
                    <CVButton>
                        <a href="https://drive.google.com/file/d/1nehNbNAGGqLdgDtfyl5CszzrkQ0srWI6/view?usp=sharing" download="Curriculo PDF" target="_blank">CV em PDF</a>
                    </CVButton>
                </div>

            </AboutMeBackground>
        </div>
    )
}

export default AboutMe;