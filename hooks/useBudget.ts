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
