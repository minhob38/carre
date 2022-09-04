/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Content from '@components/common/Content';
import NextButton from '@components/common/NextButton';
import Scroll from '@components/common/Scroll';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import {
  HEADER_HEIGHT,
  DEALER_BUTTON_HEIGHT,
  NEXT_BUTTON_HEIGHT,
} from '@constants/size';
import { IS_HIDDEN } from '@constants/variables';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import kakaoImage from '@assets/images/icons/kakao.svg';
import Checbox from '@components/auth/Checkbox';
import { USE_TERM } from '@constants/terms';
import { actions } from '@store/slices/authSlice';
import { shallowEqual } from 'react-redux';
import InputWarning from '@modals/InputWarning';

const Title = styled.div`
  margin: 24px 0 33px 0;
  font: ${fonts.HEADLINE_H2};
  color: ${colors.SECONDARY_REAL_BLACK};
  text-align: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Box = styled.div`
  position: fixed;
  bottom: ${NEXT_BUTTON_HEIGHT};
  width: 100%;
  height: ${`calc(100% - 100px - 50px - ${NEXT_BUTTON_HEIGHT})`};
  z-index: 1;
  border-radius: 8px 8px 0px 0px;
  background-color: ${colors.SECONDARY_REAL_WHITE};
  overflow: hidden;
`;

const Signup: NextPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useTypedDispatch();
  const authState = useTypedSelector((state) => {
    return state.rootReducer.authReducer;
  }, shallowEqual);
  const isInputWarningModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isInputWarningModal,
  );

  const {
    isTotalTermAgreement,
    isInfoUseTermAgreement,
    isInfoTermAgreement,
    isUseTermAgreement,
  } = authState;

  useEffect(() => {
    if (isInfoUseTermAgreement && isInfoTermAgreement) {
      setIsActive(true);
      return;
    }

    setIsActive(false);
  }, [isInfoUseTermAgreement, isInfoTermAgreement]);

  return (
    <>
      {isInputWarningModal && <InputWarning title="동의(필수)를 해주세요." />}
      <Content top="0px" bottom={NEXT_BUTTON_HEIGHT}>
        <Background />
        <Box>
          <Title>개인정보 활용 동의</Title>
          <Scroll direction="y" height={'calc(100% - 100px)'}>
            <CheckboxContainer>
              <Checbox
                input={{ name: '', value: 'user' }}
                title="전체동의"
                description=""
                link={''}
                onChange={() => dispatch(actions.clickTotalAgreement())}
                checked={isTotalTermAgreement}
              />
              <Checbox
                input={{ name: '', value: 'user' }}
                title="[필수] 개인 정보 활용 동의"
                description="개인 정보 활용 동의 보러가기"
                link="https://invited-magic-684.notion.site/203af742a79e4b65bf68ccd884b7f632"
                onChange={() => dispatch(actions.clickInfoUseTermAgreement())}
                checked={isInfoUseTermAgreement}
              />
              <Checbox
                input={{ name: '', value: 'user' }}
                title="[선택] 개인 정보 동의"
                description="개인 정보 동의 보러가기"
                link={
                  'https://invited-magic-684.notion.site/646d75216c184217bf0a7eef2ca06742'
                }
                onChange={() => dispatch(actions.clickInfoTermAgreement())}
                checked={isInfoTermAgreement}
              />
              <Checbox
                input={{
                  name: '',
                  value: 'user',
                }}
                title="[선택] 이용 약관 동의"
                description="이용 약관 동의 보러가기"
                link="https://invited-magic-684.notion.site/92b92d8352b14f53a397f1cf603cc5b8"
                onChange={() => dispatch(actions.clickUseTermAgreement())}
                checked={isUseTermAgreement}
              />
            </CheckboxContainer>
          </Scroll>
        </Box>
        <NextButton
          title="확인"
          onClick={() => console.log('확인')}
          isActive={isActive}
        />
      </Content>
    </>
  );
};

export default Signup;
