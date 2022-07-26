/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as colors from '@constants/colors';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';

const SIDE_MARGIN = 37;

interface IProps {
  minBudgetOffsetX: number;
  maxBudgetOffsetX: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 310px;
  height: 116px;
`;

const Bar = styled.div`
  position: relative;
  /* width: calc(100% - ${SIDE_MARGIN}px - ${SIDE_MARGIN}px); */
  width: 100%;
  height: 12px;
  background-color: ${colors.GRAY2};
  border-radius: 100px;
`;

const RangeBar = styled.div`
  position: absolute;
  background-color: ${colors.YELLOW1};
  border-radius: 100px;
  top: 0;
  bottom: 0;
  left: ${(props: IProps) => `${props.minBudgetOffsetX}px`};
  right: ${(props: IProps) => `${props.maxBudgetOffsetX}px`};
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
  left: ${(props: Pick<IProps, 'minBudgetOffsetX'>) =>
    `${props.minBudgetOffsetX}px`};
`;

const RightBall = styled(Ball)`
  right: ${(props: Pick<IProps, 'maxBudgetOffsetX'>) =>
    `${props.maxBudgetOffsetX}px`};
`;

const Input = styled.input`
  all: unset;
  /* position: absolute; */
  width: 110px;
  height: 36px;
  background: #ffffff;
  border: 1px solid ${colors.YELLOW1};
  border-radius: 100px;
  font: normal 400 13px / 21px roboto;
  text-align: center;
  &::placeholder {
    color: ${colors.GRAY1};
  }
`;

const MinBudgetInput = styled(Input)`
  left: ${(props: Pick<IProps, 'minBudgetOffsetX'>) =>
    `${props.minBudgetOffsetX}px`};
`;

const MaxBudgetInput = styled(Input)`
  right: ${(props: Pick<IProps, 'maxBudgetOffsetX'>) =>
    `${props.maxBudgetOffsetX}px`};
`;

const InputContainer = styled.div`
  width: 100%;
  margin: 0 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Budget: React.FC = () => {
  const dispatch = useTypedDispatch();
  const minBudgetOffsetX = useTypedSelector(
    (state) => state.rootReducer.inputReducer.minBudgetOffsetX,
  );
  const maxBudgetOffsetX = useTypedSelector(
    (state) => state.rootReducer.inputReducer.maxBudgetOffsetX,
  );

  // TODO: ball이 bar를 안 넘어가게 처리
  // TODO: 말풍선 기준으로 드래그
  return (
    <Wrapper>
      <InputContainer>
        <Input placeholder="4000만원" type="number" name="max-budget" />
        <Input placeholder="1억2000만원" type="number" name="max-budget" />
      </InputContainer>
      <Bar>
        <LeftBall
          minBudgetOffsetX={minBudgetOffsetX}
          onTouchMove={(ev) => {
            dispatch(
              actions.moveMinBudgetX(ev.changedTouches[0].pageX - SIDE_MARGIN),
            );
          }}
        />
        <RightBall
          maxBudgetOffsetX={maxBudgetOffsetX}
          onTouchMove={(ev) => {
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
        <RangeBar
          minBudgetOffsetX={minBudgetOffsetX}
          maxBudgetOffsetX={maxBudgetOffsetX}
        />
      </Bar>
    </Wrapper>
  );
};

export default Budget;
