import styled from "styled-components";

const SeccionMarvel = () => {
  return (
    <Container className="relative flex gap-20 justify-between">
        <InfoContainer className="ProgressBar flex justify-center">
            <Titulo>PROGRESO DE PELICULAS PRODUCIDAS</Titulo>
        </InfoContainer>
        <InfoContainer className="VideoMovie flex justify-center">
            <video src="./assets/videoplay.mp4" autoPlay loop muted />
        </InfoContainer>
        <InfoContainer className="ImagenMovie"/>
    </Container>
  )
}
const Container = styled.section`
    height: 30%;
    width: 100%;
    margin-top: 1.5rem;
    .ProgressBar{
        width: 510px;
    }
    .VideoMovie{
        width: 380px;
       
    }
    .VideoMovie video{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    .ImagenMovie{
        width: 380px;
        background: no-repeat center url(./assets/Poster.jpeg) ;
        background-size: cover;
        background-position: bottom;
    }
`;
const InfoContainer = styled.div`
    background-color: #111111;
    border: 0.75px solid #42331A;
    height: 192px;
`;
const Titulo = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: #F0E6D2;
    text-align: center;
    font-family: 'Cinzel', serif;
    margin-top: 20px;

`;
export default SeccionMarvel