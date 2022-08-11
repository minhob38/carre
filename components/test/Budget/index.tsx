/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import {
  BALL_RADIUS,
  INDICATOR_WIDTH,
  INITIAL_MAX_POSITION,
  INITIAL_MIN_POSITION,
  SIDE_MARGIN,
} from '@constants/variables';

import useBudget from '@hooks/useBudget';

interface IProps {
  minBudgetPosition: number;
  maxBudgetPosition: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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

const Indicator = styled.div`
  position: absolute;
  bottom: -26px;
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
  const dispatch = useTypedDispatch();
  const minBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.minBudgetPosition,
  );
  const maxBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.maxBudgetPosition,
  );

  const [minBudgetValue, maxBudgetValue] = useBudget(
    minBudgetPosition,
    maxBudgetPosition,
  );

  return (
    <Wrapper>
      <Bar>
        <LeftBallReferencePoint>
          <LeftBall
            minBudgetPosition={minBudgetPosition}
            onTouchMove={(ev) => {
              dispatch(
                actions.moveMinBudgetX(
                  ev.changedTouches[0].pageX -
                    SIDE_MARGIN -
                    INITIAL_MIN_POSITION,
                ),
              );
              // 가격입력 dispatch 추가 (안보는 input)
            }}
          />
          <LeftIndicator minBudgetPosition={minBudgetPosition}>
            {minBudgetValue}
          </LeftIndicator>
        </LeftBallReferencePoint>
        <RightBallReferencePoint>
          <RightBall
            maxBudgetPosition={maxBudgetPosition}
            onTouchMove={(ev) => {
              dispatch(
                actions.moveMaxBudgetX(
                  -(
                    -window.innerWidth +
                    ev.changedTouches[0].pageX +
                    SIDE_MARGIN +
                    INITIAL_MAX_POSITION
                  ),
                ),
              );
            }}
          />

          <RightIndicator maxBudgetPosition={maxBudgetPosition}>
            {maxBudgetValue}
          </RightIndicator>
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
