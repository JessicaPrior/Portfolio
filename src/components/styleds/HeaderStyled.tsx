import styled from "styled-components";
import Image from "../../assets/foto2.jpg"

// CSS of Header 
export const HeaderButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 5%;
    position: absolute;
    top: 0;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2vh;
    @media screen and (max-width: 1000px) and (min-width: 500px){
        width: 110vw
    }
`

export const HeaderButton = styled.button`
    color: #e1e6de;
    background: transparent;
    margin-right: 25px;
    border: transparent;
    font-style: italic; 
    font-family: "audiowide";
    text-shadow: 5px 3px 3px black;
    font-size: 20px;
    transition: all 0.9s;
    &:hover {
      border-radius: 5px;
      background-color: #8B0000;
    }
    a{
        text-decoration: none;
        color: #e1e6de;
    }
`

export const HeaderBackground = styled.div`
    width: 100%;
    height: 80vh;
    padding: 0;
    background-image: url(${Image});
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -10vh;
    @media screen and (max-width: 1000px) and (min-width: 500px) {
        height: 65vh;
    }
`

export const CardHeader = styled.div`
    width: 25vw;
    margin: 2vw;
    padding: 0;
    border-radius: 8px;
    background-color: #B2222299;
    display: flex;
    flex-direction: column;
    h1{
        margin-top: 1px;
        margin-bottom: 5px;
        font-size: 45px;
        font-family: "Satisfy";
        text-shadow: 5px 3px 3px black;
        padding-left: 15px;
    },
    h4{
        margin-top: 1px;
        margin-bottom: 1px;
        color: #D3D3D3;
        text-shadow: 5px 3px 2px black;
        font-family: "el messiri";
        font-size: 2.8vh;
        padding: 10px;
        
    }
    p{
        margin-top: 8px;
    }
    @media screen and (max-width: 2000px) and (min-width: 500px) {
        width: 40vh;
    p{
        padding-left: 10px;
    }
    }
`
