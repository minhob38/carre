/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import ResultBar from '@components/result/ResultBar';
import {
  TOTAL_SCORE,
  CRITERION_SCORE,
  TENDENCY_TABLE,
} from '@constants/variables';
import { useTypedSelector } from '@hooks/useStore';

interface IProps {
  type: 'static' | 'dynamic';
}

interface IStyleProps extends IProps {
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
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  /* height: 320px; */
  margin: 0 auto;
  padding: 22px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.2);
  box-shadow: ${(props: IProps) =>
    props.type === 'dynamic'
      ? '0px 5px 10px rgba(96, 100, 112, 0.06);'
      : '0px 5px 20px rgba(96, 100, 112, 0.2)'};
  background-color: ${colors.SECONDARY_REAL_WHITE};
`;

const ScoreText = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 60px;
  text-align: left;
  font: ${(props: IStyleProps) =>
    props.type === 'dynamic' ? fonts.BODY_REGULAR_2 : fonts.TITLE_T2};
  color: ${(props: IStyleProps) =>
    props.type === 'dynamic' ? colors.SECONDARY_400 : props.color};
`;

const ScoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ScoreCard: React.FC<IProps> = ({ type }) => {
  const carFactor = useTypedSelector(
    (state) => state.rootReducer.resultReducer.tendency.carFactor,
  );

  const values: any = [];

  for (const key in carFactor) {
    if (key === 'factorBaseAge') continue;
    values.push({
      value: key,
      title: TENDENCY_TABLE[key],
      score: Math.floor(carFactor[key]),
    });
  }

  const Scores = values.map((score) => {
    const color =
      score.score > CRITERION_SCORE ? colors.PRIMARY_500 : colors.SECONDARY_400;

    return (
      <ScoreBox key={uuid4()}>
        <ScoreText type={type} color={color}>
          {score.title}
        </ScoreText>
        <ResultBar
          type={type}
          value={score.value}
          score={score.score}
          totalScore={TOTAL_SCORE}
          criterionScore={CRITERION_SCORE}
        />
      </ScoreBox>
    );
  });

  return <Wrapper type={type}>{Scores}</Wrapper>;
};

export default ScoreCard;
