/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import InputLabel from '@components/InputLabel';
import NextButton from '@components/NextButton';
import ProgressBar from '@components/ProgressBar';
import Canvas from '@components/Canvas';
import Header from '@components/Header';
import Image from '@components/Image';
import Arrow from '@components/Arrow';
import * as colors from '@constants/colors';
import { brands } from '@constants/variables';
import brandImage from '@assets/images/brand.svg';

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

const Test: NextPage = () => {
  const [isBrandDown, setIsBrandDown] = useState<boolean>(false);
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
              height: 70px;
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
              direction={isBrandDown ? 'bottom' : 'top'}
              calibrationY="2.5px"
              onClick={() => setIsBrandDown(!isBrandDown)}
            />
            <div
              css={css`
                width: 20px;
              `}
            />
          </div>

          <div
            css={css`
              display: flex;
              display: ${isBrandDown ? 'flex' : 'none'};
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;
              gap: 9px 14px;
              padding: 14px 0;
            `}
          >
            {Brands}
          </div>
        </div>
      </div>
      <ProgressBar stage={3} />
      <NextButton path={'/test/3'} />
    </>
  );
};

export default Test;
