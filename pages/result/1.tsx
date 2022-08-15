/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import DealerButton from '@components/result/DealerButton';
import Attractions from '@components/result/Attractions';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, DEALER_BUTTON_HEIGHT } from '@constants/size';

const Title = styled.div`
  margin: 22px 0 16px ${margins.SIDE_MAIN_MARGIN};
  padding: 0 100px 0 0;
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const ResultCardContainer = styled.div`
  width: 100%;
  padding: 0 ${margins.SIDE_MAIN_MARGIN};
`;

const Border = styled.div`
  padding: 5px 0 5px 0;
  background-color: ${colors.SECONDARY_100};
`;

const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 350px;
  height: 60px;
  margin: 32px auto 19px auto;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_400};
  font: ${fonts.BUTTON_1};
  color: ${colors.SECONDARY_500};
`;

const Result: NextPage = () => {
  return (
    <>
      <Header title="나의 추천 차량" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Scroll direction="y" height="100%">
          <Title>성능과 안전 두마리 토끼를 잡으려는 당신!</Title>
          <ResultCardContainer>
            <Scroll direction="x" width="100%">
              <ResultCard />
              <ResultCard />
              <ResultCard />
            </Scroll>
          </ResultCardContainer>
          <Border />
          <Attractions />
          <Link href="/result/3" passHref={true}>
            <EditButton>검사 결과 조절해보기</EditButton>
          </Link>
        </Scroll>
      </Content>
      <DealerButton />
    </>
  );
};

export default Result;
