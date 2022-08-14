/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import NextButton from '@components/common/NextButton';
import ProgressBar from '@components/test/ProgressBar';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Budget from '@components/common/Budget';
import Toggle from '@components/common/Toggle';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';

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

const Manual = styled.div`
  display: flex;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  justify-content: flex-end;
  align-items: center;
  margin: 51px auto 12px auto;
  font: ${fonts.BUTTON_3};
  color: ${colors.SECONDARY_400};
  text-decoration-line: underline;
`;

const ToggleContainer = styled.div`
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
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
        <Budget />
        <Manual>직접입력하기</Manual>
        <ToggleContainer>
          <Toggle />
        </ToggleContainer>
        <ProgressBar stage={2} />
        <NextButton title="다음" path={'/test/4'} />
      </Content>
    </>
  );
};

export default Test;
