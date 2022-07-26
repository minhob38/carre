/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InputLabel from '@components/InputLabel';
import NextButton from '@components/NextButton';
import ProgressBar from '@components/ProgressBar';
import Canvas from '@components/Canvas';
import Header from '@components/Header';
import Image from '@components/Image';
import checkImage from '@assets/images/check.svg';
import * as colors from '@constants/colors';
import Budget from '@components/Budget';

const Title = styled.div`
  margin: 30px 0 2px 0;
  font: normal 700 20px / 32px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 0 0 20px 0;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
`;

const SubTitle = styled.div`
  margin: 0;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK2};
`;

const SubDescription = styled.div`
  margin: 0 0 30px 0;
  font: normal 400 12px / 20px roboto;
  color: ${colors.GRAY1};
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
  const [touchBudgetX, setTouchBudgetX] = useState<number>(0);
  const [budgetX, setBudgetX] = useState<number>(55);
  console.log('render');
  return (
    <>
      <Header title="나의 정보 입력" />
      <Canvas>
        <Title>나의 구매 필수 조건 입력</Title>
        <Description>차량 구매에 필수적인 나의 정보를 입력해요</Description>
        <SubTitle>가격설정</SubTitle>
        <SubDescription>가격의 스펙트럼을 변경해요</SubDescription>

        <div
          css={css`
            display: flex;
            margin: 0 0 0 18px;
          `}
        >
          {/* <Image src={checkImage} alt="check" width="24px" height="24px" /> */}
          {/* <div
            css={css`
              font: normal 400 14.5px / 20px roboto;
              color: rgba(65, 65, 65, 0.8);
              white-space: pre;
              margin: 0 0 0 10px;
            `}
          >
            {`이 구간에 밖에 있더라도 \n구간의 양 꼭짓점과 비슷한 차량도 함께 보기 \n(워딩 수정)`}
          </div> */}
        </div>
        <Budget />
      </Canvas>
      <ProgressBar stage={2} />
      <NextButton path={'/test/3'} />
    </>
  );
};

export default Test;
