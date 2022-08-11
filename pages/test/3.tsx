/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextButton from '@components/common/NextButton';
import ProgressBar from '@components/test/ProgressBar';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Image from '@components/common/Image';
import Budget from '@components/test/Budget';
import checkImage from '@assets/images/check.svg';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import { MIN_YEAR, MAX_YEAR, DEFAULT_YEAR } from '@constants/variables';

const Title = styled.div`
  margin: 28px 0 4px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  margin: 0 0 32px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_300};
`;

const SubTitle = styled.div`
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const SubDescription = styled.div`
  margin: 0 0 15px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
`;

const Test: NextPage = () => {
  return (
    <>
      <Header title="나의 정보 입력" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
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
