/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InputLabel from '@components/InputLabel';
import NextButton from '@components/NextButton';
import Canvas from '@components/Canvas';
import Header from '@components/Header';
import Image from '@components/Image';
import dollarImage from '@assets/images/dollar.svg';
import checkImage from '@assets/images/check.svg';

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
          <Image src={dollarImage} alt="dollar" width="35px" height="35px" />
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

        <input
          placeholder="4000만원"
          type="number"
          name="min-budget"
          css={css`
            all: 'unset';
            width: 107px;
            height: 36px;
            background: #ffffff;
            border: 1px solid #7a5de8;
            box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.04);
            border-radius: 100px;
            font: normal 500 13.5px / 18px roboto;
            text-align: center;
            &::placeholder {
              color: rgba(176, 173, 173, 0.6);
            }
          `}
        />

        <div
          css={css`
            display: flex;
            margin: 0 0 0 18px;
          `}
        >
          <Image src={checkImage} alt="check" width="24px" height="24px" />
          <div
            css={css`
              font: normal 400 14.5px / 20px roboto;
              color: rgba(65, 65, 65, 0.8);
              white-space: pre;
              margin: 0 0 0 10px;
            `}
          >
            {`이 구간에 밖에 있더라도 \n구간의 양 꼭짓점과 비슷한 차량도 함께 보기 \n(워딩 수정)`}
          </div>
        </div>
      </Canvas>
      {/* <NextButton nextPage="/test/1" /> */}
    </>
  );
};

export default Test;
