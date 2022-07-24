/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InputLabel from '@components/InputLabel';
import NextButton from '@components/NextButton';
import Canvas from '@components/Canvas';
import Header from '@components/Header';
import Image from 'next/image';
import dollarImage from '@assets/images/dollar.svg';

const Title = styled.div`
  margin: 12px 0 5px 0;
  font: normal 700 21px / 28px roboto;
  color: #515151;
`;

const Description = styled.div`
  margin: 0 0 35px 0;
  font: normal 400 14.5px / 20px roboto;
  color: rgba(65, 65, 65, 0.8);
`;

const SubTitle = styled.div`
  margin: 0 0 12px 0;
  font: normal 600 17px / 26px roboto;
  color: #515151;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 48px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
`;

const Select = styled.select`
  all: unset;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  font: normal 500 15px / 21px roboto;
  color: #7a7979;
`;

const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

const YearContainer = styled.div`
  margin: 0 35px 0 0;
`;

const GenderContainer = styled.div``;

const PurposeContainer = styled.div`
  margin: 40px 0 0 0;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
`;

const Test: NextPage = () => {
  return (
    <>
      <Header />
      <Canvas>
        <Title>나의 구매 필수 조건 입력</Title>
        <Description>차량 구매에 필수적인 나의 정보를 입력해요</Description>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <ImageContainer>
            <Image src={dollarImage} alt="dollar" layout="fill" />
          </ImageContainer>
          <div
            css={css`
              margin: 0 0 0 9px;
            `}
          >
            <div
              css={css`
                font: normal 700 17px / 23px roboto;
                color: #515151;
              `}
            >
              가격설정
            </div>
            <div
              css={css`
                font: normal 400 11.5px / 16px roboto;
                color: #8a99b5;
              `}
            >
              가격의 스펙트럼을 변경해요
            </div>
          </div>
        </div>
      </Canvas>
      <NextButton />
    </>
  );
};

export default Test;
