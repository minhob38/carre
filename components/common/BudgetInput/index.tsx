/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { actions as inputActions } from '@store/slices/inputSlice';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid ${colors.SECONDARY_200};
  text-align: center;
  &::placeholder {
    font: ${fonts.BODY_REGULAR_1};
    color: ${colors.SECONDARY_250};
  }
`;

const Won = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  font: ${fonts.BODY_REGULAR_1};
  color: ${colors.SECONDARY_250};
`;

const Warning = styled.div`
  width: 100%;
  margin: 20px auto 0 auto;
  font: ${fonts.BODY_REGULAR_1};
  color: ${colors.ERROR_RED};
  text-align: center;
`;

const BudgetInput: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useTypedDispatch();

  const budget: any = useTypedSelector((state) => {
    const inputState = state.rootReducer.inputReducer;
    return inputState.budget;
  });

  useEffect(() => {
    const MIN_BUDGET = 1500; // 1500만원
    const MAX_BUDGET = 30000; // 3억원
    const _budget = Number(budget);
    if (_budget >= MIN_BUDGET && _budget <= MAX_BUDGET) {
      setIsActive(true);
      return;
    }

    setIsActive(false);
  }, [budget]);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputActions.setBudget(ev.target));
  };

  return (
    <>
      <Wrapper>
        <Input
          placeholder="원하는 값을 입력해주세요."
          type="number"
          name="useBudget"
          // value={!!budget ? budget : 'none'}
          onChange={handleInputChange}
          pattern="[0-9]*"
          inputMode="numeric"
        />
        {!!budget && <Won>만원</Won>}
      </Wrapper>
      {!!budget && !isActive && (
        <Warning>1500만원 - 3억 사이의 값을 넣어주세요.</Warning>
      )}
    </>
  );
};

export default BudgetInput;
