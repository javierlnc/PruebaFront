import styled from "styled-components";

const SeccionMarvel = () => {
  return (
    <Container className="relative flex gap-20 justify-between">
        <InfoContainer className="ProgressBar flex justify-center">
            <Titulo>PROGRESO DE PELICULAS PRODUCIDAS</Titulo>
            <div className="flex flex-col justify-center mt-6 mb-6 gap-2">
            <div className="text-right upperText">
                <p>23 Películas</p>
                <p>Metas de producción</p>
            </div>
            <ProgressBar>
                <div className="blue"></div>
            </ProgressBar>
            <div className="downText">
                <p>15 Películas</p>
                <p>Producidas</p>
            </div>
            </div>
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
    flex-direction: column;
    .upperText{
        margin-right: 35px;
        font-size: 10px;
        color: #C89B3C;
    }
    .blue{
        width: 75%;
        height: 100%;
        background: linear-gradient(180deg, #31969D 0%, #65E6F4 31.77%, #24AEBD 66.15%, #1299A8 98.96%);
    }
    .downText{
        position: relative;
        left:60%;
        font-size: 10px;
        color: #1DA5B4;
    }
`;
const Titulo = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: #F0E6D2;
    text-align: center;
    font-family: 'Cinzel', serif;
    margin-top: 20px;
`;
const ProgressBar = styled.div`
    width: 80%;
    height: 30px;
    border: 7px solid #1E2328;
    background-color:#D9D9D9;
    box-shadow: 0px 0px 4px #FFA942, 0px 0px 4px rgba(255, 169, 66, 0.25), 0px 0px 7px rgba(255, 169, 66, 0.25);
    margin: auto;
    transform: skew(20deg);
    -webkit-transform: skew(-20deg); 
     -moz-transform: skew(-20deg); 
     -o-transform: skew(-20deg); 
`;
export default SeccionMarvel