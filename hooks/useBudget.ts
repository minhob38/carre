import { useState, useEffect, useCallback } from 'react';
import { useTypedDispatch, useTypedSelector } from './useStore';
import useWindowDimensions from '@hooks/useWindowDimension';
import {
  INITIAL_MIN_BUDGET,
  INITIAL_MAX_BUDGET,
  DELTA_Y,
  INITIAL_MIN_POSITION,
  INITIAL_MAX_POSITION,
} from '@constants/variables';
import * as margins from '@constants/margins';
import { actions } from '@store/slices/inputSlice';

const SIDE_MARGIN = parseInt(margins.SIDE_MAIN_MARGIN.slice(0, -2));
const GAP = 50;
const END = 20;

export const useBudgetValue = (minBudgetPosition, maxBudgetPosition) => {
  const dispatch = useTypedDispatch();
  const { width } = useWindowDimensions();
  const minBudgetValue = useTypedSelector(
    (state) => state.rootReducer.inputReducer.minBudgetValue,
  );
  const maxBudgetValue = useTypedSelector(
    (state) => state.rootReducer.inputReducer.maxBudgetValue,
  );

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
  useEffect(() => {
    if (!width) return;
    const DELTA_X =
      width - 2 * SIDE_MARGIN - INITIAL_MIN_POSITION - INITIAL_MAX_POSITION;

    const slope = DELTA_Y / DELTA_X;
    const minBudgetValue = Math.floor(
      slope * minBudgetPosition + INITIAL_MIN_BUDGET,
    );
    const maxBudgetValue = Math.floor(
      -slope * maxBudgetPosition + INITIAL_MAX_BUDGET,
    );

    dispatch(actions.setMinBudgetX(minBudgetValue));
    dispatch(actions.setMaxBudgetX(maxBudgetValue));
  }, [
    dispatch,
    width,
    minBudgetPosition,
    maxBudgetPosition,
    minBudgetValue,
    maxBudgetValue,
  ]);
  return [minBudgetValue, maxBudgetValue];
};

/**
 * @description bar fixed point에서의 거리를 계산하는 함수 반환
 * minBudgetPosition, maxBudgetPosition은 pageX와 같은 좌표계
 * @params x는 ev.changedTouces[0].pageX
 */
export const useBudgetPosition = () => {
  const dispatch = useTypedDispatch();
  const { width } = useWindowDimensions();
  const minBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.minBudgetPosition,
  );
  const maxBudgetPosition = useTypedSelector(
    (state) => state.rootReducer.inputReducer.maxBudgetPosition,
  );
  const setMinBudgetPosition = useCallback(
    (x) => {
      if (!width) return;

      const negativeLimit = -INITIAL_MIN_POSITION + END;
      let positiveLimit;
      const budgetType: 'min-max' | 'point' = 'point';

      if (budgetType === 'point') {
        positiveLimit = width - 2 * SIDE_MARGIN - INITIAL_MIN_POSITION - END;
      } else {
        /* min/max일 때 계산법 */
        positiveLimit =
          width -
          2 * SIDE_MARGIN -
          INITIAL_MIN_POSITION -
          INITIAL_MAX_POSITION -
          maxBudgetPosition -
          GAP -
          END;
      }

      dispatch(
        actions.moveMinBudgetX(
          Math.max(
            Math.min(x - SIDE_MARGIN - INITIAL_MIN_POSITION, positiveLimit),
            negativeLimit,
          ),
        ),
      );
    },
    [dispatch, width, maxBudgetPosition],
  );

  const setMaxBudgetPosition = useCallback(
    (x) => {
      if (!width) return;

      const positiveLimit =
        width -
        2 * SIDE_MARGIN -
        INITIAL_MIN_POSITION -
        INITIAL_MAX_POSITION -
        minBudgetPosition -
        GAP;
      const negativeLimit = -INITIAL_MAX_POSITION;

      dispatch(
        actions.moveMaxBudgetX(
          Math.max(
            Math.min(
              -(-width + x + SIDE_MARGIN + INITIAL_MAX_POSITION),
              positiveLimit,
            ),
            negativeLimit,
          ),
        ),
      );
    },
    [dispatch, width, minBudgetPosition],
  );

  return [setMinBudgetPosition, setMaxBudgetPosition];
};
