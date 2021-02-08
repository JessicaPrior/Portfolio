import styled from "styled-components";

// CSS of Scholarship
export const ScholarshipBackground = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(41deg, rgba(17,32,19,0.8270658605238971) 10%, rgba(28,64,35,0.8774860285911239) 50%, rgba(16,36,17,0.8158613787311799) 93%);    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div{
      display: flex;
    }
`

export const ScholarshipTitle = styled.div`
  height: 30px;
  margin: 2.5vh 4vw 4vh;
  font-family: "nova slim";
  font-size: 4vh;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #e1e6de;
  text-shadow: 5px 3px 3px black;
  display: flex;
`

export const ScholarCard = styled.div`
  width: 327px;
  margin: 1vh 4vw 3vh;
  padding: 33px 27px 15px 33px;
  border-radius: 8px;
  background-color: #6B8E2380;
  display: flex;
  flex-direction: column;
`

export const ScholarTitle = styled.div`
  width: 262px;
  margin: 0 5px 0 0;
  font-family: "bree serif";
  font-size: 19px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #bfe7aa;
  text-shadow: 5px 3px 3px black;
`

export const ScholarText = styled.div`
  display: flex;
  flex-direction: column;
  p{
    font-family: "roboto";
    font-size: 2.2vh;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #303030;
    
  },
  em{
    margin-top: 5px;
    color: #bfe7aa;
    font-family: "concert one";
  }
  
`