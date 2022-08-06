/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import Arrow from '@components/common/Arrow';
import Link from 'next/link';
import casperImage from '@assets/images/casper.svg';
import infoImage from '@assets/images/info.svg';
import ResultCard from '@components/result/ResultCard';

const Title = styled.div`
  margin: 24px 0 20px 20px;
  font: normal 400 20px / 26px roboto;
  color: ${colors.BLACK1};
`;

const ItemText = styled.div`
  font: 'normal 400 18px / 20px roboto';
  color: ${colors.BLACK1};
`;

const TestItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 78px;
  border-radius: 8px;
  background-color: ${colors.YELLOW1};
  padding: 0 23px;
`;

const RecommendationCard = styled.div`
  padding: 16px 22px 0 22px;
  width: 324px;
  height: 534px;
  border-radius: 8px;
  background-color: ${colors.WHITE1};
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
`;

const RankContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
`;

const Rank = styled.div`
  margin: 0 10px 0 0;
  font: normal 400 24px / 32px roboto;
  color: ${colors.YELLOW2};
`;

const CarName = styled.div`
  font: normal 400 24px / 32px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 0 0 8px 0;
  font: normal 400 14px / 22px roboto;
  color: ${colors.BLACK1};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 8px 0 0 0;
`;

const Detail = styled.div`
  font: normal 400 14px / 23px roboto;
  color: ${colors.BLACK2};
`;

const TermContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Term = styled.div`
  margin: 2px 0 0 12px;
  font: normal 400 12px / 20px roboto;
  color: ${colors.GRAY1};
  text-decoration-line: underline;
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

const OptionContainer = styled(TrimContainer)``;

const OptionTitle = styled(TrimTitle)``;

const Option = styled(Trim)``;

const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PriceTitle = styled.div`
  margin: 0 16px 0 0;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK2};
`;

const Price = styled.div`
  font: normal 400 20px / 32px roboto;
  color: ${colors.BLACK2};
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
