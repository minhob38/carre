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
  /* bar길이 - 말풍선 연동 수식
  - preset min 설정: m (e.g 4000만원)
  - preset max 설정: n (e.g 8000만원)
  - preset min / max 설정 및 구간 계산: p (e.g 8000만원 - 4000만원 : 4000만원)
  - preset min / max bar 길이: q  (e.g 200px)
  - preset min / max 초기 위치(왼쪽/오른쪽으로부터) 계산: r (e.g 55px)
  - min budget offset = p/q(x - r) + m
  - max budget offset = -p/q(x - r) + m
  (x는 min / max offset (왼쪽/오른쪽으로부터))
  */
  return (
    <Wrapper>
      <InputContainer>
        <Input
          placeholder="4000만원"
          type="number"
          name="min-budget"
          value={Math.floor((minBudgetOffsetX - 55) * 40 + 4000)}
          onChange={(ev) => {
            const value = ev.target.value;
            dispatch(actions.moveMinBudgetX(parseInt(value) / 40 - 45));
          }}
        />
        <Input
          placeholder="8000만원"
          type="number"
          name="max-budget"
          value={Math.floor(-(maxBudgetOffsetX - 55) * 40 + 8000)}
          onChange={(ev) => {
            const value = ev.target.value;
            console.log(-(parseInt(value) / 40) + 75);
            dispatch(actions.moveMaxBudgetX(-(parseInt(value) / 40) + 255));
          }}
        />
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
