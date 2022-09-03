/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Content from '@components/common/Content';
import NextButton from '@components/common/NextButton';
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
import { useTypedSelector } from '@hooks/useStore';
import kakaoImage from '@assets/images/icons/kakao.svg';
import Checbox from '@components/auth/Checkbox';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  width: 100%;
  font: ${fonts.HEADLINE_H1};
  font-weight: 400;
  color: ${colors.PRIMARY_400};
  text-align: center;
`;

const Description = styled.div`
  width: 100%;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
  white-space: pre;
  text-align: center;
  margin: 23px 0 38px 0;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 56px;
  margin: 0 auto;
  padding: 0 0 0 23px;
  border-radius: 8px;
  background-color: #fee500;
`;

const ButtonText = styled.a`
  all: unset;
  flex: 1;
  text-align: center;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
`;

const REDIRECT_URI =
  process.env.NODE_ENV === 'production'
    ? 'https://carre-silk.vercel.app/auth/login'
    : 'http://localhost:3000/auth/login';

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
`;

const Signup: NextPage = () => {
  return (
    <>
      <Content top="0px" bottom={NEXT_BUTTON_HEIGHT}>
        <Background />
        <Box>
          <Title>개인정보 활용 동의</Title>
          <CheckboxContainer>
            <Checbox
              input={{ name: '', value: 'user' }}
              title="전체동의"
              description="..."
            />
            <Checbox
              input={{ name: '', value: 'user' }}
              title="[필수] 개인 정보 활용 동의"
              description="..."
            />
            <Checbox
              input={{ name: '', value: 'user' }}
              title="[선택] 개인 정보 동의"
              description="..."
            />
            <Checbox
              input={{ name: '', value: 'user' }}
              title="[선택] 이용 약관 동의"
              description="..."
            />
          </CheckboxContainer>
        </Box>
        <NextButton title="확인" onClick={() => console.log('확인')} />
      </Content>
    </>
  );
};

export default Signup;
