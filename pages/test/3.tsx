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
import brandImage from '@assets/images/brand.svg';
import Arrow from '@components/Arrow';
import { brands } from '@constants/variables';
import { v4 as uuid4 } from 'uuid';

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

const Div = styled.div``;
const Ul = styled.ul``;
const Test: NextPage = () => {
  const [touchBudgetX, setTouchBudgetX] = useState<number>(0);
  const [budgetX, setBudgetX] = useState<number>(55);
  console.log(brands);
  const Brands = brands.map((brand) => {
    return (
      <InputLabel
        key={uuid4()}
        input={{
          title: brand.title,
          type: 'checkbox',
          name: 'brand',
          value: brand.value,
        }}
        style={{
          width: '95px',
          height: '48px',
          font: 'normal 400 12px / 26px roboto',
        }}
      />
    );
  });
  return (
    <>
      <Header title="나의 정보 입력" />
      <Canvas>
        <Title>추가 선택 조건 선택</Title>
        <Description>꼭 원하는 조건이 있다면선택해주세요</Description>
      </Canvas>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: calc(100% - 20px - 20px);
            border-radius: 8px;
            background-color: ${colors.GRAY2};
          `}
        >
          <div //헤더
            css={css`
              display: flex;
              align-items: center;
              width: calc(100% - 20px - 20px);
              height: 62px;
              margin: auto;
              border-bottom: solid 1px ${colors.GRAY3};
            `}
          >
            <Image src={brandImage} alt="brand" width="30px" height="30px" />
            <div
              css={css`
                margin: 0 0 0 16px;
                font: normal 400 16px / 27px roboto;
                color: ${colors.BLACK3};
              `}
            >
              브랜드
            </div>
            <div
              css={css`
                flex: 1;
              `}
            />
            <Arrow
              length="14px"
              width="2px"
              color={colors.BLACK2}
              direction="top"
              calibrationY="2.5px"
              // onClick={handleArrowClick}
            />
            <div
              css={css`
                width: 20px;
              `}
            />
          </div>
          <div
            css={css`
              height: 14px;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;
              gap: 9px 14px;
            `}
          >
            {Brands}
          </div>
          <div
            css={css`
              height: 14px;
            `}
          />
        </div>
      </div>
      <ProgressBar stage={3} />
      <NextButton path={'/test/3'} />
    </>
  );
};

export default Test;
