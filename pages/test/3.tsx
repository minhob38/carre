/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import NextButton from '@components/common/NextButton';
import ProgressBar from '@components/test/ProgressBar';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Budget from '@components/common/PointBudget';
import Toggle from '@components/common/Toggle';
import InputWarning from '@modals/InputWarning';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import { actions } from '@store/slices/surveySlice';
import { actions as inputActions } from '@store/slices/inputSlice';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { IS_HIDDEN } from '@constants/variables';
import BudgetInput from '@components/common/BudgetInput';

const Title = styled.div`
  margin: 28px 0 4px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  margin: 0 0 32px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_300};
`;

const SubTitle = styled.div`
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const SubDescription = styled.div`
  margin: 0 0 40px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
`;

const ToggleContainer = styled.div`
  margin: 20px 0 0 ${margins.SIDE_MAIN_MARGIN};
`;

const InputContainer = styled.div`
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto;
`;

const Test: NextPage = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useTypedDispatch();
  const isInputWarningModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isInputWarningModal,
  );
  const surveyToken = useTypedSelector(
    (state) => state.rootReducer.surveyReducer.surveyToken,
  );
  const budget: any = useTypedSelector((state) => {
    const inputState = state.rootReducer.inputReducer;
    return inputState.budget;
  });
  const input: any = useTypedSelector((state) => {
    const inputState = state.rootReducer.inputReducer;
    const {
      birthYear,
      gender,
      carUsagePurpose,
      budget,
      minBudgetValue,
      maxBudgetValue,
      passengerCount,
      drivenDistanceInYear,
    } = inputState;

    return {
      birthYear,
      gender,
      carUsagePurpose,
      userBudget: 10000 * Number(budget),
      userBudgetMin: 10000 * Number(minBudgetValue),
      userBudgetMax: 10000 * Number(maxBudgetValue),
      passengerCount,
      drivenDistanceInYear,
    };
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

  const handleButtonClick = () => {
    if (!surveyToken) {
      return alert('survey token does not exist');
    }
    dispatch(actions.bindSurveyAsync({ surveyToken, input }));
    router.push('/test/5');
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputActions.setBudget(ev.target));
  };

  return (
    <>
      {isInputWarningModal && <InputWarning title="알맞은 값을 넣어주세요." />}
      <Header title="나의 정보 입력" type="back" backPath="/test/2" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <Title>예산 조건 입력</Title>
        <Description>차량 구매에 필요한 나의 정보를 입력해요</Description>
        {/* <SubTitle>가격설정</SubTitle>
        <SubDescription>차량의 가격을 직접 입력해요</SubDescription> */}
        <InputContainer>
          <BudgetInput />
        </InputContainer>
        <ToggleContainer>
          <Toggle />
        </ToggleContainer>
        <ProgressBar stage={2} />
        <NextButton
          title="다음"
          onClick={handleButtonClick}
          isActive={isActive}
        />
      </Content>
    </>
  );
};

export default Test;
