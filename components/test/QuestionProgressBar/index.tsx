/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';

interface IProps {
  stage: number;
  total: number;
  type: 'fill' | 'point';
}

const Bar = styled.div`
  position: relative;
  width: ${`calc(100% - ${margins.SIDE_SUB_MARGIN} - ${margins.SIDE_SUB_MARGIN})`};
  height: 7px;
  background-color: ${colors.SECONDARY_100};
  border-radius: 100px;
`;

const CurrentStage = styled.div`
  position: absolute;
  transform: ${(props: IProps) => {
    if (props.type === 'point') {
      return `translate(calc(100% * ${props.stage - 1}), 0)`;
    }
    return 'none';
  }};
  width: ${(props: IProps) => {
    if (props.type === 'point') {
      return `calc(100% / ${props.total})`;
    }
    return `calc(${props.stage} * 100% / ${props.total})`;
  }};
  width: ${(props: IProps) => `calc(${props.stage} * 100% / ${props.total})`};
  height: 7px;
  background-color: ${colors.PRIMARY_400};
  border-radius: 100px;
  margin: auto;
  z-index: 1;
`;

const QuestionProgressBar: React.FC<IProps> = ({ stage, total, type }) => {
  return (
    <Bar>
      <CurrentStage stage={stage} total={total} type={type} />
    </Bar>
  );
};

export default QuestionProgressBar;
