/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';

interface IProps {
  stage: number;
}

const STAGE_COUNT = 21;

const Bar = styled.div`
  position: relative;
  width: calc(100% - 26px - 26px);
  height: 7px;
  background-color: ${colors.GRAY2};
  border-radius: 100px;
`;

const CurrentStage = styled.div`
  position: absolute;
  transform: ${(props: IProps) => `translate(calc(100% * ${props.stage}), 0)`};
  width: calc(100% / ${STAGE_COUNT});
  height: 7px;
  background-color: ${colors.YELLOW1};
  border-radius: 100px;
  margin: auto;
  z-index: 1;
`;

const QuestionProgressBar: React.FC<IProps> = ({ stage }) => {
  return (
    <Bar>
      <CurrentStage stage={stage} />
    </Bar>
  );
};

export default QuestionProgressBar;
