/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ScoreCard from '@components/result/ScoreCard';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT } from '@constants/size';

const Title = styled.div`
  margin: 22px 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const SubTitle = styled.div`
  margin: 4px 0 20px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const Description = styled.div`
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 52px - 52px);
  text-align: center;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const NextButton = styled.div`
  position: fixed;
  left: 50%;
  bottom: 78px;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 70px;
  border-radius: 8px;
  background-color: ${colors.SECONDARY_REAL_BLACK};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_WHITE};
`;

const BUTTON_POSTION = '78px';
const BUTTON_HEIGHT = '70px';

const Result: NextPage = () => {
  return (
    <>
      <Header title="나의 취향 결과" type="close" closePath="/" />
      <Content
        top={HEADER_HEIGHT}
        bottom={'0'}
        // bottom={`(${BUTTON_HEIGHT} + ${BUTTON_POSTION})px`}
        backgroudColor={colors.PRIMARY_400}
      >
        <Scroll
          direction="y"
          height={`calc(100% - ${BUTTON_HEIGHT} - ${BUTTON_POSTION} - 15px)`}
        >
          {/* TODO: 변수로 사용자 이름 넣기 */}
          <Title>성능과 안전</Title>
          <SubTitle>두마리 토끼를 잡으려는 당신!</SubTitle>
          <ScoreCard />
          <Description>
            당신은 안전과 편의성을 중시하며 실속을 챙기는 합리적인 실속파입니다.
          </Description>
        </Scroll>
        <Link href="/result/1" passHref={true}>
          <NextButton>내 취향의 차량 보기</NextButton>
        </Link>
      </Content>
    </>
  );
};

export default Result;
