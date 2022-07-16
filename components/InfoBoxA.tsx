/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import landingA from "../assets/images/landing-a.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0 20px;
  width: calc(100% - 20px);
  height: 194px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.04);
  border-radius: 20px 0px 0px 20px;
  filter: drop-shadow(0px 2px 13px rgba(122, 93, 232, 0.04));
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.div`
  font: normal 700 19px / 27px Roboto;
  color: #515151;
  white-space: pre;
`;

const Description = styled.div`
  font: normal 500 14px / 20px Roboto;
  color: rgba(65, 65, 65, 0.6);
  white-space: pre;
`;

const InfoBoxA: React.FC = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={landingA} alt="landing-a" width={85} height={107} />
      </ImageContainer>
      <TextContainer>
        <Title>{`검증된 데이터를 통한 \n신뢰성 있는 추천`}</Title>
        <Description>{`구축된 데이터 베이스를 통해 \n전문 분석된 차량을 추천합니다.`}</Description>
      </TextContainer>
    </Wrapper>
  );
};

export default InfoBoxA;
