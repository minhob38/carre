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
import useWindowDimensions from '@hooks/useWindowDimension';
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

const BallReferencePoint = styled.div`
  position: absolute;
  top: 50%;
  width: 80px;
  height: 14px;
  z-index: 2;
`;

const PointBallReferencePoint = styled(BallReferencePoint)`
  left: ${INITIAL_MIN_POSITION}px;
  transform: translate(-50%, -50%);
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

const PointBall = styled(Ball)`
  left: ${(props: Pick<IProps, 'minBudgetPosition'>) =>
    `calc(50% + ${props.minBudgetPosition}px)`};
  transform: translate(-50%, -50%);
  background-color: ${colors.PRIMARY_400};
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

const PointIndicator = styled(Indicator)`
  left: ${(props: Pick<IProps, 'minBudgetPosition'>) =>
    `calc(50% + ${props.minBudgetPosition}px)`};
  transform: translate(-50%);
`;

/* min이 point와 같음 */
const Budget: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const minBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.minBudgetPosition,
  );
  const maxBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.maxBudgetPosition,
  );
  const [setMinBudgetPosition, setMaxBudgetPosition] = useBudgetPosition();
  const [minBudgetValue] = useBudgetValue(minBudgetPosition, maxBudgetPosition);

  const handlePointBallTouch = (ev) => {
    setMinBudgetPosition(ev.changedTouches[0].pageX);
  };

  useEffect(() => {
    if (!width) return;
    const halfLength = (width - SIDE_MARGIN - SIDE_MARGIN) / 2;
    setMinBudgetPosition(halfLength + SIDE_MARGIN);
    setIsInitialized(true);
  }, []);

  return (
    <Wrapper>
      {isInitialized && (
        <Bar>
          <PointBallReferencePoint>
            <PointIndicator minBudgetPosition={minBudgetPosition}>
              {convertNumberToWon(Math.round(minBudgetValue / 100) * 100)}
            </PointIndicator>
            <PointBall
              minBudgetPosition={minBudgetPosition}
              onTouchMove={handlePointBallTouch}
              // onClick={(ev) => console.log('left')}
            >
              <TouchableBall />
            </PointBall>
          </PointBallReferencePoint>
        </Bar>
      )}
    </Wrapper>
  );
};

export default Budget;
