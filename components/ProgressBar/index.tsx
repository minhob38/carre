/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';

interface IProps {
  stage: number;
}

const STAGE_COUNT = 3;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  position: relative;
  width: calc(100% - 45px - 45px);
  height: 7px;
  background-color: ${colors.GRAY2};
  border-radius: 100px;
`;

const CurrentStage = styled.div`
  position: absolute;
  transform: ${(props: IProps) =>
    `translate(calc(100% * ${props.stage - 1}), 0)`};
  width: calc(100% / ${STAGE_COUNT});
  height: 7px;
  background-color: ${colors.YELLOW1};
  border-radius: 100px;
  margin: auto;
  z-index: 1;
`;

const ProgressBar: React.FC<IProps> = ({ stage }) => {
  return (
    <Wrapper>
      <Bar>
        <CurrentStage stage={stage} />
      </Bar>
    </Wrapper>
  );
};

export default ProgressBar;
