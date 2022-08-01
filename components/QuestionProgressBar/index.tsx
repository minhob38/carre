/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';

interface IProps {
  stage: number;
  total: number;
}

const Bar = styled.div`
  position: relative;
  width: calc(100% - 26px - 26px);
  height: 7px;
  background-color: ${colors.GRAY2};
  border-radius: 100px;
`;

const CurrentStage = styled.div`
  position: absolute;
  transform: ${(props: IProps) =>
    `translate(calc(100% * ${props.stage - 1}), 0)`};
  width: ${(props: IProps) => `calc(100% / ${props.total})`};
  height: 7px;
  background-color: ${colors.YELLOW1};
  border-radius: 100px;
  margin: auto;
  z-index: 1;
`;

const QuestionProgressBar: React.FC<IProps> = ({ stage, total }) => {
  return (
    <Bar>
      <CurrentStage stage={stage} total={total} />
    </Bar>
  );
};

export default QuestionProgressBar;
