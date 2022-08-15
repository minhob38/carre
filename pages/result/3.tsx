/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import NextButton from '@components/common/NextButton';
import StyleCheckBoxes from '@components/common/StyleCheckBoxes';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import Chip from '@components/result/BigChip';
import Budget from '@components/common/Budget';
import Toggle from '@components/common/Toggle';

const Title = styled.div`
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const Subtitle = styled.div`
  margin: 2px 0 14px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
`;

const Manual = styled.div`
  display: flex;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  justify-content: flex-end;
  align-items: center;
  margin: 47px auto 12px auto;
  font: ${fonts.BUTTON_3};
  color: ${colors.SECONDARY_400};
  text-decoration-line: underline;
`;

const ToggleContainer = styled.div`
  margin: 0 0 47px ${margins.SIDE_MAIN_MARGIN};
`;

const StyleCheckBoxesContainer = styled.div`
  margin: 0 0 0 27px;
`;

const NavigatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 16px 0 20px 0;
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

const Result: NextPage = () => {
  return (
    <>
      <Header title="검사 결과 조절" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <NavigatorContainer>
          <Chip title="가격 변경" type="yes" />
          <Chip title="차량 스타일 변경" type="no" />
          <Chip title="차량 가치 변경" type="no" />
        </NavigatorContainer>
        <Scroll direction="y" height="100%" width="100%">
          <div>
            <Title>가격 변경</Title>
            <Subtitle>가격의 스펙트럼을 변경할 수 있어요.</Subtitle>
            <Budget />
            <Manual>직접입력하기</Manual>
            <ToggleContainer>
              <Toggle />
            </ToggleContainer>
          </div>
          <div>
            <Title>차량 스타일 변경</Title>
            <Subtitle>차량 스타일을 변경한 후 확인해보세요.</Subtitle>
            <StyleCheckBoxesContainer>
              <StyleCheckBoxes />
            </StyleCheckBoxesContainer>
          </div>
        </Scroll>
      </Content>
      <NextButton title="다음" path="/result" />
    </>
  );
};

export default Result;
