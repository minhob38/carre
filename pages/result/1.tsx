/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import * as colors from '@constants/colors';

const Title = styled.div`
  margin: 24px 0 20px 20px;
  font: normal 400 20px / 26px roboto;
  color: ${colors.BLACK1};
`;

const TrimContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TrimTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK2};
`;

const Trim = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const Test: NextPage = () => {
  return (
    <>
      <Header title="나의 추천 차량" backPath="/test" />
      <Content top="55px" bottom="0">
        <Title>성능과 안전 두마리 토끼를 잡으려는 당신!</Title>
        <Scroll direction="x" width="100%">
          <ResultCard />
        </Scroll>
      </Content>
    </>
  );
};

export default Test;
