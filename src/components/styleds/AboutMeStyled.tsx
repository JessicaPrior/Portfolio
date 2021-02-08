import styled from "styled-components";

// CSS of About me
export const AboutMeBackground = styled.div`
    width: 100%;
    height: 60vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, rgba(213,96,53,0.8942927512801996) 24%, rgba(177,71,52,0.9307073171065301) 48%, rgba(15,45,22,0.9755252442773985) 87%);
`

export const AboutMeTitle = styled.div`
    margin: 0;
    font-family: "nova slim";
    font-size: 5vh;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #e1e6de;
    text-shadow: 5px 3px 3px black;
`

export const AboutMeText = styled.div`
  width: 50vh;
  margin: 0;
  font-family: "roboto";
  font-size: 2.6vh;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #323631;
`

export const LanguagesText = styled.div`
  width: 50vh;
  margin: 0;
  font-family: "roboto";
  font-size: 2.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #323631;
  display: flex;
  flex-direction: row;
`

export const CVButton = styled.button`
    width: 140px;
    height: 30px;
    margin: 32px 12px 5px 103px;
    padding: 5px 30px 7px 31px;
    border-radius: 8px;
    box-shadow: 3px 4px 5px 2px rgba(0, 0, 0, 0.5);
    background-color: #2F4F4F;
    font-family: "audiowide";
    text-shadow: 5px 3px 3px black;
    font-weight: bold;
    font-size: 12px;
    a{
        text-decoration: none;
        color: #e1e6de;
    }
`

export const Photo = styled.div`
    width: 305px;
    height: 305px;
    margin: 0 103px 0 0;
    display: flex;
    @media screen and (max-width: 1000px) and (min-width: 500px) {
        width: 25vw;
        height: 25vh;
    }
`

export const Img = styled.img`
    border-radius: 45%;
    align-content: center;
`