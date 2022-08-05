/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextButton from '@components/NextButton';
import ProgressBar from '@components/ProgressBar';
import Header from '@components/Header';
import Content from '@components/Content';
import Image from '@components/Image';
import Budget from '@components/Budget';
import checkImage from '@assets/images/check.svg';
import * as colors from '@constants/colors';

const Title = styled.div`
  margin: 30px 0 2px 20px;
  font: normal 700 20px / 32px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 0 0 20px 20px;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
`;

const SubTitle = styled.div`
  margin: 0 0 0 20px;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK2};
`;

const SubDescription = styled.div`
  margin: 0 0 30px 20px;
  font: normal 400 12px / 20px roboto;
  color: ${colors.GRAY1};
`;

const Test: NextPage = () => {
  return (
    <>
      <Header title="나의 정보 입력" backPath="/test/2" />
      <Content top="55px" bottom="0">
        <Title>나의 구매 필수 조건 입력</Title>
        <Description>차량 구매에 필수적인 나의 정보를 입력해요</Description>
        <SubTitle>가격설정</SubTitle>
        <SubDescription>가격의 스펙트럼을 변경해요</SubDescription>
        <div
          css={css`
            display: flex;
            margin: 0 0 0 18px;
          `}
        ></div>
        <Budget />
        <div
          css={css`
            display: flex;
            align-items: center;
            margin: 15px 0 0 35px;
          `}
        >
          <Image src={checkImage} alt="check" width="18px" height="18px" />
          <div
            css={css`
              font: normal 400 13px / 26px roboto;
              color: ${colors.GRAY1};
              margin: 0 0 0 16px;
            `}
          >
            비슷한 가격대 차량도 함께 보기
          </div>
        </div>
        <ProgressBar stage={2} />
        <NextButton title="다음" path={'/test/4'} />
      </Content>
    </>
  );
};

export default Test;
