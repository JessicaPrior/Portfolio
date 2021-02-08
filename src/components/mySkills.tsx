import React from "react"
import { BackEndTitle, FrontEndTitle, MySkillsBackground, MySkillsTitle, TextBack, TextFront } from "./styleds/SkillsStyled"

const MySkills = () => {
    return (
        <div>
            <MySkillsBackground>
                <MySkillsTitle>
                    <p>O que faço?</p>
                </MySkillsTitle>
                <div style={{ display: "flex"}}>
                    <div>
                        <FrontEndTitle>
                            <p>Front-end</p>
                        </FrontEndTitle>
                        <TextFront>
                            <p>
                                Desenvolvimento de aplicações web utilizando HTML,
                                CSS e JavaScript. Criação de sites responsivos seguindos
                                princípio de Mobile First.
                            </p>
                        </TextFront>
                    </div>
                    <div>
                        <BackEndTitle>
                            <p>Back-end</p>
                        </BackEndTitle>
                        <TextBack>
                            <p>
                                Aplicações utilizando NodeJS, TypeScript e MySQL.
                                Criação de API's para comunicação com front-end
                                seguindo princípio de Clean Code.
                            </p>
                        </TextBack>
                    </div>
                </div>
            </MySkillsBackground>
        </div>
    )
}

export default MySkills;