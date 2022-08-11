/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';

const SIDE_MARGIN = parseInt(margins.SIDE_MAIN_MARGIN.slice(0, -2));
const BALL_RADIUS = 11;
const INDICATOR_WIDTH = 80;

interface IProps {
  minBudgetOffsetX: number;
  maxBudgetOffsetX: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* width: 310px; */
  /* height: 116px; */
  margin: auto;
`;

const Bar = styled.div`
  position: relative;
  width: calc(100% - ${SIDE_MARGIN}px - ${SIDE_MARGIN}px);
  /* width: 100%; */
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
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  /* left: 50%; */
  transform: translate(0, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid ${colors.SECONDARY_100};
  background-color: ${colors.SECONDARY_REAL_WHITE};
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
  z-index: 2;
`;

const LeftBall = styled(Ball)`
  left: ${(props: Pick<IProps, 'minBudgetOffsetX'>) =>
    `${props.minBudgetOffsetX}px`};
`;

const RightBall = styled(Ball)`
  right: ${(props: Pick<IProps, 'maxBudgetOffsetX'>) =>
    `${props.maxBudgetOffsetX}px`};
`;

// const LeftInput = styled.input`
//   all: unset;
//   position: absolute;
//   left: ${(props: Pick<IProps, 'minBudgetOffsetX'>) =>
//     `${props.minBudgetOffsetX}px`};
//   background: #ffffff;
//   font: ${fonts.BUTTON_3};
//   color: ${colors.SECONDARY_250};
//   width: 80px;
// `;

// const RightInput = styled(LeftInput)`
//   right: ${(props: Pick<IProps, 'maxBudgetOffsetX'>) =>
//     `${props.maxBudgetOffsetX}px`};
//   background-color: yellow;
// `;

// const MinBudgetInput = styled(Input)`
//   left: ${(props: Pick<IProps, 'minBudgetOffsetX'>) =>
//     `${props.minBudgetOffsetX - BALL_RADIUS / 2}px`};
// `;

// const MaxBudgetInput = styled(Input)`
//   right: ${(props: Pick<IProps, 'maxBudgetOffsetX'>) =>
//     `${props.maxBudgetOffsetX - BALL_RADIUS / 2}px`};
// `;

const IndicatorContainer = styled.div`
  position: relative;
  width: calc(100% - ${SIDE_MARGIN}px - ${SIDE_MARGIN}px);
  margin: 0 0 30px 0;
  height: 23px;
`;

const Indicator = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  font: ${fonts.BUTTON_3};
  color: ${colors.SECONDARY_250};
`;

const LeftIndicator = styled(Indicator)`
  left: ${(props: Pick<IProps, 'minBudgetOffsetX'>) =>
    `${props.minBudgetOffsetX - INDICATOR_WIDTH / 2 + BALL_RADIUS}px`};
`;

const RightIndicator = styled(Indicator)`
  right: ${(props: Pick<IProps, 'maxBudgetOffsetX'>) =>
    `${props.maxBudgetOffsetX - INDICATOR_WIDTH / 2 + BALL_RADIUS}px`};
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
      <IndicatorContainer>
        {/* <LeftInput
          readOnly={true}
          minBudgetOffsetX={minBudgetOffsetX}
          placeholder="4000만원"
          type="number"
          pattern="[0-9]*"
          name="min-budget"
          value={Math.floor((minBudgetOffsetX - 55) * 40 + 4000)}
          onChange={(ev) => {
            const value = ev.target.value;
            dispatch(actions.moveMinBudgetX(parseInt(value) / 40 - 45));
          }}
        />
        <RightInput
          readOnly={true}
          maxBudgetOffsetX={maxBudgetOffsetX}
          placeholder="8000만원"
          type="number"
          pattern="[0-9]*"
          name="max-budget"
          value={Math.floor(-(maxBudgetOffsetX - 55) * 40 + 8000)}
          onChange={(ev) => {
            const value = ev.target.value;
            console.log(-(parseInt(value) / 40) + 75);
            dispatch(actions.moveMaxBudgetX(-(parseInt(value) / 40) + 255));
          }}
        /> */}
        <LeftIndicator minBudgetOffsetX={minBudgetOffsetX}>
          {Math.floor((minBudgetOffsetX - 55) * 40 + 4000)}
        </LeftIndicator>
        <RightIndicator maxBudgetOffsetX={maxBudgetOffsetX}>
          {Math.floor(-(maxBudgetOffsetX - 55) * 40 + 8000)}
        </RightIndicator>
      </IndicatorContainer>
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
