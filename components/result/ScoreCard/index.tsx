/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import ResultBar from '@components/result/ResultBar';
import { TOTAL_SCORE, CRITERION_SCORE } from '@constants/variables';
import { useTypedSelector } from '@hooks/useStore';

interface IStyleProps {
  color: string;
  backgroundColor?: string;
  opacity?: number;
}

const Wrapper = styled.div`
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

const ScoreCard: React.FC = () => {
  const values = useTypedSelector(
    (state) => state.rootReducer.inputReducer.values,
  );

  const Scores = values.map((score) => {
    const color =
      score.score > CRITERION_SCORE ? colors.PRIMARY_500 : colors.SECONDARY_400;
    return (
      <ScoreBox key={uuid4()}>
        <ScoreText color={color}>{score.title}</ScoreText>
        <ResultBar
          value={score.value}
          score={score.score}
          totalScore={TOTAL_SCORE}
          criterionScore={CRITERION_SCORE}
        />
      </ScoreBox>
    );
  });

  return <Wrapper>{Scores}</Wrapper>;
};

export default ScoreCard;
