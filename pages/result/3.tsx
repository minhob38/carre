/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import NextButton from '@components/common/NextButton';
import StyleCheckBoxes from '@components/common/StyleCheckBoxes';

const Title = styled.div`
  margin: 0 0 0 20px;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const Subtitle = styled.div`
  margin: 2px 0 14px 20px;
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
`;

const StyleCheckBoxesContainer = styled.div`
  margin: 0 0 0 27px;
`;

const Result: NextPage = () => {
  return (
    <>
      <Header title="검사 결과 조절" backPath="/result" />
      <Content top="55px" bottom="72px">
        <Scroll direction="y" height="100%">
          <Title>차량 스타일 변경</Title>
          <Subtitle>차량 스타일을 변경한 후 확인해보세요.</Subtitle>
          <StyleCheckBoxesContainer>
            <StyleCheckBoxes />
          </StyleCheckBoxesContainer>
        </Scroll>
      </Content>
      <NextButton title="다음" path="/result" />
    </>
  );
};

export default Result;
