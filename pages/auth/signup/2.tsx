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
import InputWarning from '@modals/InputWarningModal';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import { actions } from '@store/slices/authSlice';
// import { actions as inputActions } from '@store/slices/inputSlice';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { IS_HIDDEN } from '@constants/variables';
import DealerMatchedModal from '@modals/DealerMatchedModal';
import ServerErrorModal from '@modals/ServerErrorModal';

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

const Manual = styled.div`
  display: flex;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  justify-content: flex-end;
  align-items: center;
  margin: 51px auto 12px auto;
  font: ${fonts.BUTTON_3};
  color: ${colors.SECONDARY_400};
  text-decoration-line: underline;
`;

const ToggleContainer = styled.div`
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  height: 47px;
  margin: 0 auto;
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
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 20px auto 0 auto;
  font: ${fonts.BODY_REGULAR_1};
  color: ${colors.ERROR_RED};
  text-align: center;
`;

const reg = /[0-9]+/g;

const Test: NextPage = () => {
  const router = useRouter();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useTypedDispatch();
  const isServerErrorModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isServerErrorModal,
  );
  const isInputWarningModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isInputWarningModal,
  );
  const isDealerMatchedModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isDealerMatchedModal,
  );
  const surveyToken = useTypedSelector(
    (state) => state.rootReducer.surveyReducer.surveyToken,
  );
  const phoneNumber: any = useTypedSelector((state) => {
    return state.rootReducer.authReducer.phoneNumber;
  });

  const dealerId: any = useTypedSelector((state) => {
    return state.rootReducer.dealerReudcer.dealer;
  });

  const recommendId: any = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.recommendId;
  });

  const currentCar = useTypedSelector((state) => {
    const carPage = state.rootReducer.resultReducer.carPage;
    if (!state.rootReducer.resultReducer.recoms) return null;
    const { recommendCarInfoList } = state.rootReducer.resultReducer.recoms;
    return recommendCarInfoList[carPage - 1];
  });

  // const recommendId: any = useTypedSelector((state) => {
  //   return state.rootReducer.resultReducer.;
  // });

  useEffect(() => {
    const isValid = reg.test(phoneNumber);
    if (isValid) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [phoneNumber]);

  const handleButtonClick = () => {
    // if (!surveyToken) {
    //   return alert('survey token does not exist');
    // }
    if (!currentCar) return;

    dispatch(
      actions.connectUserAndDealerAsync({
        surveyToken,
        recommendId,
        dealerId,
        phoneNumber,
        carFactorId: currentCar.carFactorId,
      }),
    );
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setPhoneNumber(ev.target));
  };
  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => setIsInputFocused(false);

  return (
    <>
      {isServerErrorModal && <DealerMatchedModal />}
      {isInputWarningModal && <InputWarning title="알맞은 값을 넣어주세요." />}
      {isDealerMatchedModal && <DealerMatchedModal />}
      <Header title="나의 정보 입력" type="back" backPath="/auth/signup/1" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <Title>나의 상담 정보 입력</Title>
        <Description>상담 가능한 전화번호를 입력해요</Description>
        {/* <SubTitle>가격설정</SubTitle> */}
        {/* <SubDescription>차량의 가격을 직접 입력해요</SubDescription> */}
        <InputContainer onFocus={handleInputFocus} onBlur={handleInputBlur}>
          <Input
            placeholder="전화번호를 입력해주세요. (- 생략)"
            type="tel"
            name="phoneNumber"
            onChange={handleInputChange}
            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
            inputMode="numeric"
          />
        </InputContainer>
        {!!phoneNumber && !isActive && (
          <Warning>전화번호 형식으로 넣어주세요.</Warning>
        )}
        {/* <ProgressBar stage={2} /> */}
        {!isInputFocused && (
          <NextButton
            title="보내기"
            onClick={handleButtonClick}
            isActive={isActive}
            // path={'/auth/signup/2'}
          />
        )}
      </Content>
    </>
  );
};

export default Test;
