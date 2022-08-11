import { useState, useEffect } from 'react';

import useWindowDimensions from '@hooks/useWindowDimension';
import {
  INITIAL_MIN_BUDGET,
  INITIAL_MAX_BUDGET,
  DELTA_Y,
  INITIAL_MIN_POSITION,
  INITIAL_MAX_POSITION,
  BALL_RADIUS,
} from '@constants/variables';
import * as margins from '@constants/margins';

const SIDE_MARGIN = parseInt(margins.SIDE_MAIN_MARGIN.slice(0, -2));

export default function useBudget(minBudget, maxBudget) {
  const { width } = useWindowDimensions();
  const [minBudgetPostion, setMinBudgetPostion] =
    useState<number>(INITIAL_MIN_POSITION);
  const [maxBudgetPostion, setMaxBudgetPostion] =
    useState<number>(INITIAL_MAX_POSITION);

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
      width -
      2 * SIDE_MARGIN -
      INITIAL_MIN_POSITION -
      INITIAL_MAX_POSITION -
      -2 * BALL_RADIUS;

    const slope = DELTA_Y / DELTA_X;
    const minBudgetPostion = Math.floor(
      slope * (minBudget - INITIAL_MIN_POSITION) + INITIAL_MIN_BUDGET,
    );
    const maxBudgetPostion = Math.floor(
      -slope * (maxBudget - INITIAL_MIN_POSITION) + INITIAL_MAX_BUDGET,
    );

    setMinBudgetPostion(minBudgetPostion);
    setMaxBudgetPostion(maxBudgetPostion);
  }, [width, minBudget, maxBudget]);

  return [minBudgetPostion, maxBudgetPostion];
}
