import styled from "styled-components";

// CSS of Projects 
export const ProjectsBackground = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(90deg, rgba(3,15,5,1) 0%, rgba(43,71,25,0.9363095580028886) 52%, rgba(3,15,5,0.9167017148656338) 100%);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PrincipalTitle = styled.div`
    width: 183px;
    margin: 20px;
    font-family: "nova slim";
    font-size: 3.7vh;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #e1e6de;
    text-shadow: 5px 3px 3px black;
`

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: ${props => props.tabIndex === 1 ? "row-reverse" : "row"};
  align-items: center;
  justify-content: center;
  margin: 0;
`

export const Informations = styled.div`
  margin: 5vh;
`

export const Image = styled.div`
  width: 312px;
  height: 216px;
  margin: 88px 3px 88px 0;
  object-fit: contain;
`

export const ProjectsTitle = styled.div`
  margin: 0 200px 0 0;
  font-family: "merienda";
  font-size: 30px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #e1e6de;
  text-shadow: 5px 3px 3px black;
`

export const ProjectsSubitle = styled.div`
  margin: 10px 268px 23px 0;
  font-family: "concert one";
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #b4b1b1;
  text-shadow: 5px 3px 3px black;
`

export const ProjectsText = styled.div`
  width: 368px;
  margin: 23px 0 -50px 4px;
  p{
    font-family: "roboto";
    font-size: 2.5vh;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #868c84;
  }
`

export const GitButton = styled.button`
  width: 140px;
  height: 30px;
  margin: ${props => props.tabIndex === 1 ? "30px": "10vh 2vw 0 10px"};
  padding: 0; 
  border-radius: 8px;
  box-shadow: 3px 4px 5px 2px rgba(0, 0, 0, 0.5);
  background-color: #2E8B57;
  font-family: "el messiri";
  text-shadow: 5px 3px 3px green;
  font-weight: bold;
  font-size: 15px;
  a{
    text-decoration: none;
    color: #e1e6de;
  }
`