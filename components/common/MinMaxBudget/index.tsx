/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { useTypedSelector } from '@hooks/useStore';
import {
  INDICATOR_WIDTH,
  INITIAL_MAX_POSITION,
  INITIAL_MIN_POSITION,
  SIDE_MARGIN,
} from '@constants/variables';

import { useBudgetValue, useBudgetPosition } from '@hooks/useBudget';
import { convertNumberToWon } from '@utils/helpers';
interface IProps {
  minBudgetPosition: number;
  maxBudgetPosition: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const Bar = styled.div`
  position: relative;
  width: calc(100% - ${SIDE_MARGIN}px - ${SIDE_MARGIN}px);
  height: 14px;
  background-color: ${colors.SECONDARY_200};
  border-radius: 100px;
`;

const RangeBar = styled.div`
  position: absolute;
  background-color: ${colors.PRIMARY_400};
  border-radius: 100px;
  top: 0;
  bottom: 0;
  left: ${(props: IProps) =>
    `${props.minBudgetPosition + INITIAL_MIN_POSITION}px`};
  right: ${(props: IProps) =>
    `${props.maxBudgetPosition + INITIAL_MAX_POSITION}px`};
  z-index: 1;
`;

const BallReferencePoint = styled.div`
  position: absolute;
  top: 50%;
  width: 80px;
  height: 14px;
  z-index: 2;
`;

const LeftBallReferencePoint = styled(BallReferencePoint)`
  left: ${INITIAL_MIN_POSITION}px;
  transform: translate(-50%, -50%);
`;

const RightBallReferencePoint = styled(BallReferencePoint)`
  right: ${INITIAL_MAX_POSITION}px;
  transform: translate(50%, -50%);
`;

const Ball = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid ${colors.SECONDARY_100};
  background-color: ${colors.SECONDARY_REAL_WHITE};
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
`;

const LeftBall = styled(Ball)`
  left: ${(props: Pick<IProps, 'minBudgetPosition'>) =>
    `calc(50% + ${props.minBudgetPosition}px)`};
  transform: translate(-50%, -50%);
`;

const RightBall = styled(Ball)`
  right: ${(props: Pick<IProps, 'maxBudgetPosition'>) =>
    `calc(50% + ${props.maxBudgetPosition}px)`};
  transform: translate(50%, -50%);
`;

const TouchableBall = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Indicator = styled.div`
  position: absolute;
  top: -26px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${INDICATOR_WIDTH}px;
  height: 100%;
  font: ${fonts.BUTTON_3};
  color: ${colors.SECONDARY_250};
`;

const LeftIndicator = styled(Indicator)`
  left: ${(props: Pick<IProps, 'minBudgetPosition'>) =>
    `calc(50% + ${props.minBudgetPosition}px)`};
  transform: translate(-50%);
`;

const RightIndicator = styled(Indicator)`
  right: ${(props: Pick<IProps, 'maxBudgetPosition'>) =>
    `calc(50% + ${props.maxBudgetPosition}px)`};
  transform: translate(50%);
`;

const Budget: React.FC = () => {
  const minBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.minBudgetPosition,
  );
  const maxBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.maxBudgetPosition,
  );
  const [setMinBudgetPosition, setMaxBudgetPosition] = useBudgetPosition();
  const [minBudgetValue, maxBudgetValue] = useBudgetValue(
    minBudgetPosition,
    maxBudgetPosition,
  );

  const handleLeftBallTouch = (ev) => {
    setMinBudgetPosition(ev.changedTouches[0].pageX);
  };

  const handleRightBallTouch = (ev) => {
    setMaxBudgetPosition(ev.changedTouches[0].pageX);
  };

  return (
    <Wrapper>
      <Bar>
        <LeftBallReferencePoint>
          <LeftIndicator minBudgetPosition={minBudgetPosition}>
            {convertNumberToWon(minBudgetValue)}
          </LeftIndicator>
          <LeftBall
            minBudgetPosition={minBudgetPosition}
            onTouchMove={handleLeftBallTouch}
            // onClick={(ev) => console.log('left')}
          >
            <TouchableBall />
          </LeftBall>
        </LeftBallReferencePoint>
        <RightBallReferencePoint>
          <RightIndicator maxBudgetPosition={maxBudgetPosition}>
            {convertNumberToWon(maxBudgetValue)}
          </RightIndicator>
          <RightBall
            maxBudgetPosition={maxBudgetPosition}
            onTouchMove={handleRightBallTouch}
            // onClick={(ev) => console.log('right')}
          >
            <TouchableBall />
          </RightBall>
        </RightBallReferencePoint>
        <RangeBar
          minBudgetPosition={minBudgetPosition}
          maxBudgetPosition={maxBudgetPosition}
        />
      </Bar>
    </Wrapper>
  );
};

export default Budget;
