/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as colors from '@constants/colors';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';

const SIDE_MARGIN = 37;

interface IProps {
  minBudgetX: number;
  maxBudgetX: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  position: relative;
  width: calc(100% - ${SIDE_MARGIN}px - ${SIDE_MARGIN}px);
  height: 12px;
  background-color: ${colors.GRAY2};
  border-radius: 100px;
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${colors.YELLOW2};
  z-index: 2;
  opacity: 0.6;
`;

const LeftBall = styled(Ball)`
  left: ${(props: Pick<IProps, 'minBudgetX'>) => `${props.minBudgetX}px`};
`;

const RightBall = styled(Ball)`
  right: ${(props: Pick<IProps, 'maxBudgetX'>) => `${props.maxBudgetX}px`};
`;

const RangeBar: React.FC = () => {
  const dispatch = useTypedDispatch();
  const minBudgetX = useTypedSelector(
    (state) => state.rootReducer.inputReducer.minBudgetX,
  );
  const maxBudgetX = useTypedSelector(
    (state) => state.rootReducer.inputReducer.maxBudgetX,
  );

  return (
    <Wrapper>
      <Bar>
        <LeftBall
          minBudgetX={minBudgetX}
          onTouchMove={(ev) => {
            dispatch(
              actions.moveMinBudgetX(ev.changedTouches[0].pageX - SIDE_MARGIN),
            );
          }}
        />
        <RightBall
          maxBudgetX={maxBudgetX}
          onTouchMove={(ev) => {
            console.log(
              -window.innerWidth + ev.changedTouches[0].pageX + SIDE_MARGIN,
            );
            dispatch(
              actions.moveMaxBudgetX(
                -(
                  -window.innerWidth +
                  ev.changedTouches[0].pageX +
                  SIDE_MARGIN
                ),
              ),
            );
          }}
        />
      </Bar>
    </Wrapper>
  );
};

export default RangeBar;
