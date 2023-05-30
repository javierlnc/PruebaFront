"use client";
import styled from "styled-components";
import Card from "@/components/Card";

const SliderCard = () => {
  const scrollLeft = () =>{
    document.getElementById("contentCard").scrollLeft -= 1400;

  }
  const scrollRight = () =>{
    document.getElementById("contentCard").scrollLeft += 1400;
  }
  return (
    <Container>
      <CaruselContainer id="contentCard" className="carousel flex p-4 items-center justify-start  gap-4 overflow-x-auto  px-8 relative rounded-box w-4 scrollbar-hide">
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
        <Card className="rounded-box"></Card>
      </CaruselContainer>
      <ButtonContainer>
        <button className="p-1" onClick={scrollLeft}>
          <svg
            className="arrow"
            fill="#C89B3C"
            stroke="black"
            strokeWidth="1"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
        <p>1/5</p>
        <button className="p-1" onClick={scrollRight}>
          <svg
            className="arrow"
            fill="#C89B3C"
            stroke="black"
            strokeWidth="1"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </ButtonContainer>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
`;
const CaruselContainer = styled.div`
  width: 100%;
  height: 70%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    color: #c89b3c;
    letter-spacing: 10px;
  }
  .arrow {
    width: 80px;
    height: 40px;
  }
`;

export default SliderCard;
