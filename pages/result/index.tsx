/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import { v4 as uuid4 } from 'uuid';
import styled from '@emotion/styled';
import Header from '@components/Header';
import Content from '@components/Content';
import ResultBar from '@components/ResultBar';
import * as colors from '@constants/colors';

interface IStyleProps {
  color: string;
  backgroundColor?: string;
  opacity?: number;
}

const Title = styled.div`
  margin: 39px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 400 30px / 39px roboto;
  color: ${colors.WHITE1};
`;

const SubTitle = styled.div`
  margin: 2px 0 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 400 24px / 39px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 22px auto 32px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 42px - 42px);
  font: normal 400 16px / 28px roboto;
  color: ${colors.BLACK5};
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 80px;
  margin: auto;
  border-radius: 8px;
  background-color: ${colors.BLACK1};
  font: normal 400 20px / 32px roboto;
  color: ${colors.WHITE1};
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
  width: 350px;
  height: 328px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.2);
  background-color: ${colors.WHITE1};
`;

const ScoreText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 400 20px / 32px roboto;
  color: ${(props: IStyleProps) => props.color};
`;

const ScoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 22px - 22px);
`;

const Result: NextPage = () => {
  const TOTAL_SCORE = 5;
  const CRITERION_SCORE = 3;

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
    const color = score.score > CRITERION_SCORE ? colors.RED1 : colors.BLACK2;
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
      <Header title="나의 취향 결과" backPath="/test" />
      <Content top="55px" bottom="0" backgroudColor={colors.YELLOW3}>
        {/* TODO: 변수로 사용자 이름 넣기 */}
        <Title>성능과 안전</Title>
        <SubTitle>두마리 토끼를 잡으려는 당신!</SubTitle>
        <ScoreContainer>{Scores}</ScoreContainer>
        <Description>
          당신은 안전과 편의성을 중시하며 실속을 챙기는 합리적인 실속파입니다.
        </Description>
        <Link href="/result" passHref={true}>
          <NextButton>내 취향의 차량 보기</NextButton>
        </Link>
      </Content>
    </>
  );
};

export default Result;
