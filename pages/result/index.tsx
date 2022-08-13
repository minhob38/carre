/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import { v4 as uuid4 } from 'uuid';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import ResultBar from '@components/result/ResultBar';
import Scroll from '@components/common/Scroll';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT } from '@constants/size';
import { TOTAL_SCORE, CRITERION_SCORE } from '@constants/variables';

interface IStyleProps {
  color: string;
  backgroundColor?: string;
  opacity?: number;
}

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

const ScoreContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 14px 0;
  width: 350px;
  height: 320px;
  margin: 0 auto;
  padding: 0 22px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.2);
  background-color: ${colors.SECONDARY_REAL_WHITE};
`;

const ScoreText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.TITLE_T2};
  color: ${(props: IStyleProps) => props.color};
`;

const ScoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BUTTON_POSTION = '78px';
const BUTTON_HEIGHT = '70px';

const Result: NextPage = () => {
  const scores: { title: string; score: number }[] = [
    { title: '성능', score: 5 },
    { title: '신뢰성', score: 4 },
    { title: '가성비', score: 3 },
    { title: '편의성', score: 3 },
    { title: '신기술', score: 2 },
    { title: '승차감', score: 2 },
    { title: '디자인', score: 1 },
  ];

  const Scores = scores.map((score) => {
    const color =
      score.score > CRITERION_SCORE ? colors.PRIMARY_500 : colors.SECONDARY_400;
    return (
      <ScoreBox key={uuid4()}>
        <ScoreText color={color}>{score.title}</ScoreText>
        <ResultBar
          score={score.score}
          totalScore={TOTAL_SCORE}
          criterionScore={CRITERION_SCORE}
        />
      </ScoreBox>
    );
  });

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
          <ScoreContainer>{Scores}</ScoreContainer>
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
